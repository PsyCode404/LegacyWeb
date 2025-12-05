/* ============================================
   LEGACY FAQ JavaScript (jQuery 1.x only)
   HTML 4.01 + CSS 2.1 + jQuery 1.x
   ============================================ */

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
	
	// Open the first FAQ item by default
	var $firstItem = $('.faq-item').first();
	$firstItem.addClass('faq-open');
	$firstItem.find('.faq-answer').show();
	$firstItem.find('.faq-toggle-icon').text('–');
	
	// FAQ question click handler
	$('.faq-question').on('click', function(e) {
		e.preventDefault();
		
		var $item = $(this).closest('.faq-item');
		var $answer = $item.find('.faq-answer');
		var $icon = $item.find('.faq-toggle-icon');
		
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
	// 6. INITIALIZATION
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
