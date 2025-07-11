const scrollBtn = document.getElementById('scrollBtn');
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');
        let currentDirection = 'down'; // Track current direction
        let isAnimating = false; // Prevent multiple animations

        // Function to check current scroll position and update button
        function updateScrollButton() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate if we're closer to top or bottom
            const scrollPercentage = scrollTop / (documentHeight - windowHeight);
            
            let newDirection;
            if (scrollPercentage > 0.5) {
                // We're in the lower half (closer to footer), show up arrow
                newDirection = 'up';
            } else {
                // We're in the upper half (closer to header), show down arrow
                newDirection = 'down';
            }

            // Check if direction changed
            if (newDirection !== currentDirection && !isAnimating) {
                animateDirectionChange(newDirection);
                currentDirection = newDirection;
            }
        }

        // Function to animate direction change
        function animateDirectionChange(newDirection) {
            isAnimating = true;
            const arrow = scrollBtn.querySelector('.arrow');
            
            // Add changing animation class
            arrow.classList.add('changing');
            scrollBtn.classList.add('direction-changed');
            
            // Change the arrow icon during the animation
            setTimeout(() => {
                if (newDirection === 'up') {
                    scrollBtn.classList.add('scroll-up');
                    arrow.innerHTML = '↑';
                } else {
                    scrollBtn.classList.remove('scroll-up');
                    arrow.innerHTML = '↓';
                }
            }, 300); // Change icon at mid-animation
            
            // Remove animation classes after animation completes
            setTimeout(() => {
                arrow.classList.remove('changing');
                scrollBtn.classList.remove('direction-changed');
                isAnimating = false;
            }, 600);
        }

        // Function to handle smooth scrolling
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPercentage = scrollTop / (documentHeight - windowHeight);
            
            if (scrollPercentage > 0.5) {
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Scroll to bottom
                window.scrollTo({
                    top: documentHeight,
                    behavior: 'smooth'
                });
            }
        }

        // Event listeners
        scrollBtn.addEventListener('click', handleScroll);
        window.addEventListener('scroll', updateScrollButton);

        // Initialize button state
        updateScrollButton();