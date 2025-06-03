// Navigation between sections
        const navButtons = document.querySelectorAll('.nav-button');
        const sections = document.querySelectorAll('main section');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.removeAttribute('aria-current');
                });
                button.classList.add('active');
                button.setAttribute('aria-current', 'page');
                const targetId = button.getAttribute('data-target');
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active');
                        section.focus();
                    } else {
                        section.classList.remove('active');
                    }
                });
                if (targetId === 'reservations') {
                    document.getElementById('name').focus();
                }
            });
        });

        // "Reserve a Table" buttons quick link to Reservations
        document.getElementById('reserve-cta').addEventListener('click', () => {
            document.querySelector('.nav-button[data-target="reservations"]').click();
        });
        document.getElementById('reserve-cta-bottom').addEventListener('click', () => {
            document.querySelector('.nav-button[data-target="reservations"]').click();
        });

        // Reservation form submission handling
        const reservationForm = document.getElementById('reservation-form');
        const reservationMessage = document.getElementById('reservation-message');

        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            reservationMessage.style.color = 'green';
            reservationMessage.textContent = 'Thank you, your reservation request has been received. We will contact you shortly!';
            reservationForm.reset();
            reservationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Back to Top button functionality
        const backToTop = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTop.classList.add('show');
                if (!document.querySelector('header').classList.contains('scrolled')) {
                    document.querySelector('header').classList.add('scrolled');
                }
            } else {
                backToTop.classList.remove('show');
                document.querySelector('header').classList.remove('scrolled');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('home').focus();
        });