/* ============================================
   LEGACY FAQ JavaScript (jQuery 1.x only)
   HTML 4.01 + CSS 2.1 + jQuery 1.x
   ============================================ */
/* v2.0 - All questions closed on load */

$(document).ready(function() {
	
	// ========================================
	// 1. LAYOUT CLASSES (Responsive simulation)
	// ========================================
	
	var resizeTimer = null;
	
	function updateLayoutClass() {
		var windowWidth = $(window).width();
		var $pageWrapper = $('#page-wrapper');
		
		// Remove any existing layout classes
		$pageWrapper.removeClass('layout-desktop layout-tablet layout-mobile');
		
		// Apply the appropriate layout class based on window width
		if (windowWidth > 1024) {
			$pageWrapper.addClass('layout-desktop');
		} else if (windowWidth >= 640 && windowWidth <= 1024) {
			$pageWrapper.addClass('layout-tablet');
		} else {
			$pageWrapper.addClass('layout-mobile');
		}
	}
	
	// ========================================
	// 3. FAQ ACCORDION
	// ========================================
	
	// Hide all FAQ answers by default
	$('.faq-answer').hide();
	
	// ========================================
	// 3. FAQ PROGRESS TRACKING
	// ========================================
	
	var totalFaqQuestions = $('.faq-item').length;
	var openedFaqIds = {};
	var openedFaqCount = 0;
	
	// Initialize progress count
	$('#faq-progress-count').text('0');
	
	// FAQ question click handler
	$('.faq-question').on('click', function(e) {
		e.preventDefault();
		
		var $item = $(this).closest('.faq-item');
		var $answer = $item.find('.faq-answer');
		var $icon = $item.find('.faq-toggle-icon');
		var index = $('.faq-item').index($item);
		
		// If this item is already open, close it
		if ($item.hasClass('faq-open')) {
			$answer.slideUp(200);
			$item.removeClass('faq-open');
			$icon.text('+');
			return;
		}
		
		// Close any other open items
		$('.faq-item.faq-open').each(function() {
			var $openItem = $(this);
			var $openAnswer = $openItem.find('.faq-answer');
			var $openIcon = $openItem.find('.faq-toggle-icon');
			
			$openAnswer.slideUp(200);
			$openItem.removeClass('faq-open');
			$openIcon.text('+');
		});
		
		// Open this item
		$item.addClass('faq-open');
		$answer.slideDown(200);
		$icon.text('–');
		
		// Track if this is the first time this question is opened
		if (!openedFaqIds[index]) {
			openedFaqIds[index] = true;
			openedFaqCount++;
			
			$('#faq-progress-count').text(openedFaqCount);
			
			// If all questions have been opened, show completion message
			if (openedFaqCount >= totalFaqQuestions) {
				$('#faq-progress').addClass('faq-progress-complete');
				$('#faq-progress-hint').text('🎉 Vous avez exploré toutes les questions de la FAQ !');
			}
		}
	});
	
	// ========================================
	// 4. TABS: HELP SECTION
	// ========================================
	
	$('.help-tab-link a').on('click', function(e) {
		e.preventDefault();
		
		var tabId = $(this).attr('data-tab');
		
		// Remove active class from all tabs
		$('.help-tab-link').removeClass('help-tab-active');
		
		// Add active class to current tab li
		$(this).parent('.help-tab-link').addClass('help-tab-active');
		
		// Hide all panels
		$('.help-tab-panel').removeClass('help-tab-panel-active');
		
		// Show selected panel
		$('#' + tabId).addClass('help-tab-panel-active');
	});
	
	// ========================================
	// 5. SMOOTH SCROLL FOR ANCHOR LINKS
	// ========================================
	
	$('a[href^="#"]').not('.faq-question').not('.help-tab-link a').on('click', function(e) {
		e.preventDefault();
		
		var href = $(this).attr('href');
		var $target = $(href);
		
		if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html, body').animate({
				scrollTop: targetOffset
			}, 400);
		}
	});
	
	// ========================================
	// 6. TOOLTIP HELPER
	// ========================================
	
	var $tooltip = $('#tooltip-helper');
	
	// Show tooltip on mouse enter
	$('.has-tooltip').on('mouseenter', function(e) {
		var text = $(this).attr('data-tooltip');
		if (!text) {
			return;
		}
		
		$tooltip.html('▲<br>' + text);
		$tooltip.show();
		
		// Position tooltip near mouse
		var offsetX = 10;
		var offsetY = 14;
		$tooltip.css({
			left: (e.pageX + offsetX) + 'px',
			top: (e.pageY + offsetY) + 'px'
		});
	});
	
	// Update tooltip position on mouse move
	$('.has-tooltip').on('mousemove', function(e) {
		var offsetX = 10;
		var offsetY = 14;
		$tooltip.css({
			left: (e.pageX + offsetX) + 'px',
			top: (e.pageY + offsetY) + 'px'
		});
	});
	
	// Hide tooltip on mouse leave
	$('.has-tooltip').on('mouseleave', function() {
		$tooltip.hide();
	});
	
	// Keyboard accessibility: show tooltip on focus
	$('.has-tooltip').on('focus', function(e) {
		var text = $(this).attr('data-tooltip');
		if (!text) {
			return;
		}
		var offset = $(this).offset();
		$tooltip.html('▲<br>' + text);
		$tooltip.show().css({
			left: (offset.left + 10) + 'px',
			top: (offset.top + $(this).height() + 8) + 'px'
		});
	});
	
	// Hide tooltip on blur
	$('.has-tooltip').on('blur', function() {
		$tooltip.hide();
	});
	
	// ========================================
	// 7. DEVICE CHECK MINI-SIMULATOR
	// ========================================
	
	$('#device-check-form').submit(function(e) {
		e.preventDefault();
		
		var age = $('input[name="age"]:checked').val();
		var slow = $('input[name="slow"]:checked').val();
		var battery = $('input[name="battery"]:checked').val();
		
		// If any question is unanswered, show a gentle message
		if (!age || !slow || !battery) {
			$('#device-result-title').text('Veuillez répondre à toutes les questions.');
			$('#device-result-details').text('');
			$('#device-result').show();
			return;
		}
		
		// Simple scoring: each "oui" adds 1 point
		var score = 0;
		if (age === 'oui') { score++; }
		if (slow === 'oui') { score++; }
		if (battery === 'oui') { score++; }
		
		var titleText = '';
		var detailsText = '';
		
		if (score === 0) {
			titleText = '⭐ Votre appareil est en pleine forme !';
			detailsText = 'Vous pouvez continuer à l\'utiliser tel quel. Pensez simplement à installer des outils respectueux de vos données et à limiter les achats inutiles.';
		} else if (score === 1 || score === 2) {
			titleText = '⭐ Recommandé : lui offrir une deuxième vie.';
			detailsText = 'Votre appareil montre quelques signes de fatigue, mais il est encore largement réutilisable. Installer un système léger (comme une distribution Linux) et remplacer une pièce clé peut suffire pour le rendre très confortable.';
		} else {
			titleText = '⭐ Recommandé : passage à Linux et réparation ciblée.';
			detailsText = 'Votre appareil semble vraiment en difficulté. Plutôt que d\'acheter du neuf, pensez à réinstaller un système léger, remplacer la batterie ou le disque, et prolonger sa durée de vie. Cela réduit fortement votre empreinte numérique et vos coûts.';
		}
		
		$('#device-result-title').text(titleText);
		$('#device-result-details').text(detailsText);
		$('#device-result').show();
	});
	
	// ========================================
	// 8. INITIALIZATION
	// ========================================
	
	// Call updateLayoutClass on document ready
	updateLayoutClass();
	
	// Bind resize handler with debounce
	$(window).on('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			updateLayoutClass();
		}, 200);
	});
	
});
