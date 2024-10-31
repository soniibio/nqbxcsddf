"use strict";

function introAnim() {
    const e = gsap.timeline();
    
    gsap.fromTo(".intro__planet", { scale: 0, opacity: 0 }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "none",
        scrollTrigger: { trigger: ".intro", start: "top bottom" }
    });

    e.from(".elem1", { drawSVG: "0%", opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem2", { drawSVG: "0%", opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem3", { drawSVG: "0%", opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem4", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem5", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".intro__tooltip--one", { opacity: 0, scale: 0, duration: 0.2, ease: "none" })
     .from(".elem6", { drawSVG: "0%", opacity: 0, duration: 0.4, ease: "none" })
     .from(".elem7", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem8", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem9", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem10", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".intro__tooltip--two", { opacity: 0, scale: 0, duration: 0.2, ease: "none" })
     .from(".elem11", { drawSVG: "0%", opacity: 0, duration: 0.4, ease: "none" })
     .from(".elem12", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem13", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem14", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem15", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".intro__tooltip--three", { opacity: 0, scale: 0, duration: 0.2, ease: "none" })
     .from(".elem16", { drawSVG: "0%", opacity: 0, duration: 0.4, ease: "none" })
     .from(".elem17", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem18", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem19", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".elem20", { opacity: 0, duration: 0.2, ease: "none" })
     .from(".intro__tooltip--four", { opacity: 0, scale: 0, duration: 0.2, ease: "none" });

    gsap.timeline().fromTo(".intro__planet", { y: "-5%" }, {
        y: "5%",
        ease: "none",
        duration: 18,
        yoyo: true,
        repeat: -1,
        scrollTrigger: { trigger: ".intro", start: "top bottom" }
    });

    gsap.fromTo(".intro__title", { yPercent: 120, rotateX: 90, opacity: 0 }, {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.6,
        ease: "none",
        scrollTrigger: { trigger: ".intro__title", start: "top bottom" }
    });

    gsap.fromTo(".intro__descr", { yPercent: 80, rotateX: 90, opacity: 0 }, {
        delay: 0.2,
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.6,
        ease: "none",
        scrollTrigger: { trigger: ".intro__descr", start: "top bottom" }
    });

    gsap.fromTo(".intro__nav", { yPercent: 200, rotateX: 90, opacity: 0 }, {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.6,
        ease: "none",
        scrollTrigger: { trigger: ".intro__nav", start: "top bottom" }
    });
}

function timerAnim() {
    gsap.to(".timer", {
        autoAlpha: 0,
        duration: 0.6,
        ease: "none",
        scrollTrigger: { trigger: ".footer", start: "top bottom", end: "top bottom", scrub: true }
    });
}

function projectAnim() {
    gsap.utils.toArray(".project__bubble").forEach(e => {
        gsap.from(e, { y: 200, opacity: 0, scale: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });

    gsap.from(".project__title", { yPercent: 200, rotateX: 90, opacity: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: ".project__title", start: "top bottom" } });

    const e = new SplitText(".project__descr", { type: "lines" });
    const t = gsap.timeline();
    t.from(e.lines, { delay: 0.2, opacity: 0, duration: 0.6, yPercent: 300, rotateX: 90, ease: "none" });
    ScrollTrigger.create({ animation: t, trigger: ".project__descr", start: "bottom bottom" });

    const o = gsap.timeline();
    const r = new SplitText(".project__text", { type: "lines" });
    o.from(r.lines, { delay: 0.4, opacity: 0, duration: 0.6, yPercent: 300, rotateX: 90, ease: "none" });
    ScrollTrigger.create({ animation: o, trigger: ".project__text", start: "bottom bottom" });
}

function benefitsAnim() {
    gsap.from(".benefits__title", { yPercent: 200, rotateX: 90, opacity: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: ".benefits__title", start: "top bottom" } });

    gsap.utils.toArray(".benefits__item").forEach(e => {
        gsap.from(e, { yPercent: 200, rotateX: 90, opacity: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });
}

function scopeAnim() {
    gsap.from(".scope__title", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".scope__title", start: "top bottom" } });
    gsap.from(".scope__slider", { delay: 0.2, opacity: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: ".scope__slider", start: "top bottom" } });
}

function registrationAnim() {
    gsap.from(".registration__title", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".registration__title", start: "top bottom" } });

    gsap.utils.toArray(".registration__input").forEach(e => {
        gsap.from(e, { opacity: 0, scale: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });

    gsap.from(".registration__btn", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".registration__btn", start: "top bottom" } });
    gsap.from(".registration__bg", { scale: 0, opacity: 0, ease: "none", scrollTrigger: { trigger: ".registration__bg", start: "top bottom" } });
}

function partnersAnim() {
    gsap.from(".partners__title", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".partners__title", start: "top bottom" } });
    gsap.from(".partners__descr", { delay: 0.2, yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".partners__descr", start: "top bottom" } });

    gsap.utils.toArray(".partners__item").forEach(e => {
        gsap.from(e, { y: "100%", opacity: 0, scale: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });
}

function aboutAnim() {
    gsap.from(".about__title", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".about__title", start: "top bottom" } });

    gsap.utils.toArray(".about__item").forEach(e => {
        gsap.from(e, { opacity: 0, rotateX: 90, duration: 0.6, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });
}

function faqSectionAnim() {
    gsap.from(".faq__title", { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".faq__title", start: "top bottom" } });

    gsap.utils.toArray(".faq__item").forEach(e => {
        gsap.from(e, { yPercent: 200, rotateX: 90, opacity: 0, ease: "none", scrollTrigger: { trigger: e, start: "top bottom" } });
    });
}

function footerAnim() {
    gsap.from(".footer__inner", { y: "100%", opacity: 0, duration: 0.6, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom" } });
}

function initAccordion() {
    const questions = document.querySelectorAll(".faq__question");
    questions.forEach(question => {
        question.addEventListener("click", function() {
            const isActive = this.classList.contains("active");
            this.classList.toggle("active", !isActive);
            this.nextElementSibling.style.maxHeight = isActive ? "" : `${this.nextElementSibling.scrollHeight}px`;
        });
    });
}

function headerFixed() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        header.classList.toggle("active", window.pageYOffset >= 1);
    }, { passive: true });
}

function toggleMenu() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav--header");

    burger.addEventListener("click", function() {
        const isActive = this.classList.contains("active");
        this.classList.toggle("active", !isActive);
        nav.classList.toggle("active", !isActive);
        isActive ? showScroll() : hideScroll();
    });
}

function mobileHeight() {
    const vh = 0.01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function togglePopup() {
    const buttons = document.querySelectorAll(".btn-reg");
    const popup = document.querySelector(".popup");
    const closeButton = document.querySelector(".popup__close");
    const overlay = document.querySelector(".overlay");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            popup.classList.add("active");
            overlay.classList.add("active");
            hideScroll();
        });
    });

    const closePopup = () => {
        popup.classList.remove("active");
        overlay.classList.remove("active");
        showScroll();
    };

    closeButton.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
}

function initScroll() {
    const links = document.querySelectorAll(".nav__link");
    const nav = document.querySelector(".nav--header");
    const burger = document.querySelector(".burger");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = link.getAttribute("href");

            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
                burger.classList.remove("active");
                showScroll();
            }

            gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 100 } });
        });
    });
}

const translations = {
    NO: {
        nav: ["Plattform", "Funksjoner", "Partnere", "Informasjon", "FAQ", "Kontakter"],
        footer: {
            info: "Informasjon",
            office: "Kontor",
            address: "1-3, Stenersgata, Oslo, Norge",
            contacts: "Kontakter",
            privacy: "Personvernpolicy",
            registration: "Gratis registrering",
            copyright: "© 2018-2024. NEMEX Investment. Alle rettigheter reservert"
        },
        intro: {
            title: "NEMEX - Kjøp, handel og mining for digitale eiendeler.",
            description: "NEMEX - En plattform som hjelper deg med å tjene Bitcoin og andre kryptovalutaer!",
            register: "Gratis registrering",
            login: "Autorisasjon"
        },
        project: {
            title: "Plattform",
            description: "Plattform for kryptovalutavirksomhet som tilbyr samarbeid, selv med minimal erfaring.",
            text: "Bli med i NEMEX og begynn å tjene penger i dag ved å bruke plattformen vår for token mining."
        },
        benefits: {
            title: "Fordeler ved partnerskap",
            items: [
                "Ingen behov for å kjøpe utstyr.",
                "Ingen vedlikeholdsavgifter.",
                "Ingen nedetid på utstyr.",
                "Robotisert system som analyserer risikoer automatisk.",
                "Ingen ekstra gebyrer ved kontrakter, uttak eller registrering.",
                "Ingen maksimale uttaksgrenser.",
                "Erfaren supportteam som sikrer stabil drift.",
                "Daglig profitt i henhold til kontrakt.",
                "Full juridisk samsvar.",
                "Kvalifisert kundeservice med rask responstid.",
                "Mulighet for betalinger både i fiat- og kryptovaluta."
            ]
        },
        scope: {
            title: "Funksjoner",
            slides: [
                { num: "01", title: "Staking", text: "Gir deg muligheten til å kjøpe og oppbevare kryptovaluta på vår plattform for stabil fortjeneste." },
                { num: "02", title: "Cloud Mining", text: "Lar deg mine kryptovaluta fra hvor som helst uten eget utstyr." },
                { num: "03", title: "Trading", text: "Vår plattform lar deg handle gjennom vårt automatiserte system som utfører risikoanalyse og mining for deg." }
            ]
        },
        registration: {
            title: "Registrer deg nå og få en bonus på 50$ for din første handel",
            namePlaceholder: "Navn*",
            telPlaceholder: "Telefon*",
            emailPlaceholder: "E-post*",
            button: "Få bonus"
        },
        faq: {
            title: "Vanlige spørsmål",
            questions: [
                { question: "Hva er trading?", answer: "Det er prosessen med å kjøpe og selge kryptovaluta for å oppnå fortjeneste..." },
                { question: "Hva er cloud mining?", answer: "Cloud mining lar deg mine kryptovaluta ved å leie datakraft fra tredjeparter..." },
                { question: "Hva er staking?", answer: "Staking innebærer at du låser kryptovaluta i en wallet for å støtte blokkjeden og tjene belønninger..." },
                { question: "Hva er referral program?", answer: "Plattformen tilbyr et 7-nivå referralsystem der partnere kan tiltrekke seg nye kunder..." },
                { question: "Hvordan få fortjeneste?", answer: "Som registrert partner får du tilgang til et investeringsportefølje..." }
            ]
        },
        partners: {
            title: "Partnere"
        },
        ticker: "NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX"
    },
    EN: {
        nav: ["Platform", "Features", "Partners", "Information", "FAQ", "Contacts"],
        footer: {
            info: "Information",
            office: "Office",
            address: "1-3, Stenersgata, Oslo, Norway",
            contacts: "Contacts",
            privacy: "Privacy Policy",
            registration: "Free Registration"
        },
        intro: {
            title: "NEMEX - Buy, trade, and mine on the platform for your digital assets.",
            description: "NEMEX - A platform that will help you start earning Bitcoin and other cryptocurrencies!",
            register: "Free Registration",
            login: "Login"
        },
        project: {
            title: "Platform",
            description: "A cryptocurrency business platform that provides the opportunity to collaborate with minimal experience in the crypto industry. Our platform includes the main types of cryptocurrency mining, such as trading, mining, and staking. Since 2018, we have built a qualified team of experienced analysts and now proudly present to you a convenient and secure space where every user can participate and earn profits, regardless of their experience.",
            text: "Join NEMEX and start earning today by using our platform for token mining"
        },
        benefits: {
            title: "Partnership Benefits",
            items: [
                "There is no need to buy equipment.",
                "No maintenance fees.",
                "No equipment downtime.",
                "A robotic system automatically performs analysis and evaluates all potential risks associated with the cryptocurrency mining process.",
                "No additional fees for contract signing, withdrawals, or account registration.",
                "There are no withdrawal limits for clients.",
                "An experienced technical support team ensures the smooth operation of equipment and prevents any technical issues, guaranteeing the stability and reliability of all systems.",
                "Daily profit accrual on the signed contract.",
                "Full legal compliance and adherence to all regulatory requirements during operations.",
                "A qualified support service with quick and effective responses to customer inquiries, ensuring a high level of service and resolving any issues in the shortest possible time.",
                "The ability to make payments in both fiat currency and cryptocurrency."
            ],
            lastItem: "The ability to make payments in both fiat currency and cryptocurrency."
        },
        ticker: "NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX"
    }, 
    RU: {
        nav: ["Платформа", "Возможности", "Партнеры", "Информация", "FAQ", "Контакты"],
        footer: {
            info: "Информация",
            office: "Офис",
            address: "1-3, Stenersgata, Осло, Норвегия",
            contacts: "Контакты",
            privacy: "Политика конфиденциальности",
            registration: "Бесплатная регистрация"
        },
        intro: {
            title: "NEMEX - Покупай, торгуй и майни на платформе для ваших цифровых активов.",
            description: "NEMEX - Платформа, которая поможет вам начать зарабатывать биткойны и другие криптовалюты!",
            register: "Бесплатная регистрация",
            login: "Авторизация"
        },
        project: {
            title: "Платформа",
            description: "Платформа криптовалютного бизнеса, которая предоставляет возможность сотрудничать, имея минимальный опыт в криптоиндустрии.",
            text: "Присоединяйтесь к NEMEX и начните зарабатывать уже сегодня, используя нашу платформу для добычи токенов."
        },
        benefits: {
            title: "Преимущества партнёрства",
            items: [
                "Нет необходимости покупать оборудование.",
                "Нет платы за обслуживание.",
                "Без простоев оборудования.",
                "Роботизированная система автоматически выполняет анализ и оценивает все потенциальные риски, связанные с процессом добычи криптовалюты.",
                "Отсутствие дополнительных комиссий за заключение контрактов, вывод средств или регистрацию аккаунта.",
                "Для клиентов не установлены ограничения на максимальную сумму вывода средств.",
                "Опытная команда технической поддержки, которая обеспечивает бесперебойную работу оборудования и предотвращает возникновение любых технических неполадок, гарантируя стабильность и надёжность всех систем.",
                "Ежедневное начисление прибыли по заключённому контракту.",
                "Полная юридическая соответствие и соблюдение всех нормативных требований в процессе деятельности.",
                "Квалифицированная служба поддержки с быстрым и эффективным реагированием на запросы клиентов.",
                "Возможность осуществления платежей как в фиатной валюте, так и в криптовалюте."
            ],
            lastItem: "Возможность осуществления платежей как в фиатной валюте, так и в криптовалюте."
        },
        ticker: "NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX"
    },
    CN: {
        nav: ["平台", "特征", "合作伙伴", "信息", "FAQ", "联系方式"],
        footer: {
            info: "信息",
            office: "办公室",
            address: "挪威奥斯陆, Stenersgata 1-3",
            contacts: "联系方式",
            privacy: "隐私政策",
            registration: "免费注册"
        },
        intro: {
            title: "NEMEX - 购买、交易并挖掘您的数字资产的平台。",
            description: "NEMEX - 一个帮助您开始赚取比特币和其他加密货币的平台！",
            register: "免费注册",
            login: "登录"
        },
        project: {
            title: "平台",
            description: "加密货币业务平台，即使是新手也可以在此协作。",
            text: "立即加入 NEMEX，开始通过我们的代币挖矿平台赚取利润。"
        },
        benefits: {
            title: "合作优势",
            items: [
                "无需购买设备。",
                "无维护费用。",
                "无设备停机时间。",
                "机器人系统自动分析风险。",
                "无合同、提款或注册的额外费用。",
                "对客户的提款没有限制。",
                "经验丰富的技术支持团队确保稳定运行。",
                "根据合同每日赚取利润。",
                "完全合法合规。",
                "提供快速响应的客户服务。",
                "可选择使用法币或加密货币进行支付。"
            ],
            lastItem: "可选择使用法币或加密货币进行支付。"
        },
        ticker: "NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX NEMEX"
    }
};


function switchLanguage(lang) {
    const translation = translations[lang];
    if (!translation) {
        console.error(`Translation for language ${lang} not found.`);
        return;
    }

    
    const navLinks = document.querySelectorAll(".nav__link");
    translation.nav.forEach((text, index) => {
        if (navLinks[index]) navLinks[index].textContent = text;
    });

    
    document.querySelector(".footer__info .footer__title").textContent = translation.footer.info;
    document.querySelector(".footer__office .footer__title").textContent = translation.footer.office;
    document.querySelector(".footer__office-contact").textContent = translation.footer.address;
    document.querySelector(".footer__contacts .footer__title").textContent = translation.footer.contacts;
    document.querySelector(".footer__link[href='privacyPolicy.html']").textContent = translation.footer.privacy;
    document.querySelector(".footer__btn").textContent = translation.footer.registration;
    document.querySelector(".footer__copyright").textContent = translation.footer.copyright;

    
    document.querySelector(".intro__title").textContent = translation.intro.title;
    document.querySelector(".intro__descr").textContent = translation.intro.description;
    document.querySelector(".btn-reg").textContent = translation.intro.register;
    document.querySelector(".btn").textContent = translation.intro.login;

    
    document.querySelector(".project__title").textContent = translation.project.title;
    document.querySelector(".project__descr").innerHTML = translation.project.description.replace(/\n/g, "<br>");
    document.querySelector(".project__text").textContent = translation.project.text;

    
    document.querySelector(".benefits__title").textContent = translation.benefits.title;
    const benefitsItems = document.querySelectorAll(".benefits__text");
    translation.benefits.items.forEach((text, index) => {
        if (benefitsItems[index]) benefitsItems[index].innerHTML = text.replace(/\n/g, "<br>");
    });

    
    document.querySelector(".scope__title").textContent = translation.scope.title;
    const scopeSlides = document.querySelectorAll(".scope__slide");
    translation.scope.slides.forEach((slide, index) => {
        if (scopeSlides[index]) {
            scopeSlides[index].querySelector(".scope__slide-num").textContent = slide.num;
            scopeSlides[index].querySelector(".scope__slide-title").textContent = slide.title;
            scopeSlides[index].querySelector(".scope__slide-text").textContent = slide.text;
        }
    });

    
    document.querySelector(".registration__title").innerHTML = translation.registration.title.replace(/\n/g, "<br>");
    document.querySelector('input[name="name"]').placeholder = translation.registration.namePlaceholder;
    document.querySelector('input[name="tel"]').placeholder = translation.registration.telPlaceholder;
    document.querySelector('input[name="email"]').placeholder = translation.registration.emailPlaceholder;
    document.querySelector(".registration__btn").textContent = translation.registration.button;

    
    document.querySelector(".faq__title").textContent = translation.faq.title;
    const faqItems = document.querySelectorAll(".faq__item");
    translation.faq.questions.forEach((faq, index) => {
        if (faqItems[index]) {
            faqItems[index].querySelector(".faq__question").textContent = faq.question;
            faqItems[index].querySelector(".faq__answer").textContent = faq.answer;
        }
    });

    
    document.querySelector(".partners__title").textContent = translation.partners.title;

   
    document.querySelector(".project__ticker-text").textContent = translation.ticker;
}


document.getElementById("lang-no").addEventListener("click", function () {
    switchLanguage("NO");
});

document.getElementById("lang-en").addEventListener("click", function () {
    switchLanguage("EN");
});

document.getElementById("lang-ru").addEventListener("click", function () {
    switchLanguage("RU");
});

document.getElementById("lang-cn").addEventListener("click", function () {
    switchLanguage("CN");
});
document.getElementById("lang-de").addEventListener("click", function () {
    switchLanguage("DE");
});



async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price');
        const data = await response.json();

        const getPrice = (symbol) => {
            const priceData = data.find(item => item.symbol === symbol);
            return priceData ? parseFloat(priceData.price) : 0;
        };

        const btcPrice = getPrice('BTCUSDT').toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '');
        const ethPrice = getPrice('ETHUSDT').toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '');
        const xrpPrice = getPrice('XRPUSDT').toFixed(2);

        document.querySelector('#btc .price').textContent = btcPrice;
        document.querySelector('#eth .price').textContent = ethPrice;
        document.querySelector('#xrp .price').textContent = xrpPrice;

    } catch (error) {
        console.error('Ошибка при получении данных с Binance API:', error);
    }
}

setInterval(fetchCryptoPrices, 100000);
fetchCryptoPrices();

  
  

  document.querySelectorAll(".language-option").forEach(option => {
    option.addEventListener("click", (e) => {
      const selectedLang = e.target.dataset.lang;
      switchLanguage(selectedLang);
    });
  });

function initSwiper() {
    const swiper = new Swiper(".scope__slider-inner", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        pagination: { el: ".swiper-pagination", type: "progressbar" },
        navigation: { nextEl: ".scope__btn-next", prevEl: ".scope__btn-prev" }
    });

    const slideActiveField = document.querySelector(".scope__slide-active");
    swiper.on("slideChange", () => {
        const index = swiper.realIndex + 1;
        slideActiveField.innerHTML = index >= 10 ? index : `0${index}`;
    });

    const slides = document.querySelectorAll(".scope__slide");
    const sliderTotal = document.querySelector(".scope__slides-total");

    if (slides.length) {
        const length = Array.from(slides).filter(slide => !slide.classList.contains("swiper-slide-duplicate")).length;
        sliderTotal.innerHTML = length >= 10 ? length : `0${length}`;
    }
}

function animateMarquee(element, duration) {
    const ticker = element.querySelector(".project__ticker-text");
    const tickerWidth = ticker.offsetWidth;
    const tickerClone = ticker.cloneNode(true);
    element.appendChild(tickerClone);

    let start = performance.now();
    function animate(currentTime) {
        const elapsed = (currentTime - start) / duration;
        const offset = tickerWidth * (elapsed % 1);
        ticker.style.transform = `translate3d(-${offset}px, 0, 0)`;
        tickerClone.style.transform = `translate3d(-${offset}px, 0, 0)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function initTilt() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    const items = document.querySelectorAll(".partners__item");
    items.forEach(item => {
        VanillaTilt.init(item, { max: 15, speed: 100 });
    });
}

function initTimer() {
    const deadline = new Date(document.querySelector(".timer").dataset.deadline);
    const days = document.querySelector(".timer__days");
    const hours = document.querySelector(".timer__hours");
    const minutes = document.querySelector(".timer__minutes");
    const seconds = document.querySelector(".timer__seconds");

    function updateTimer() {
        const now = new Date();
        const timeLeft = deadline - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        days.textContent = d < 10 ? `0${d}` : d;
        hours.textContent = h < 10 ? `0${h}` : h;
        minutes.textContent = m < 10 ? `0${m}` : m;
        seconds.textContent = s < 10 ? `0${s}` : s;
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}

// Initialize animations and interactive functions
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

    introAnim();
    timerAnim();
    projectAnim();
    benefitsAnim();
    scopeAnim();
    registrationAnim();
    partnersAnim();
    aboutAnim();
    faqSectionAnim();
    footerAnim();

    initAccordion();
    headerFixed();
    try { toggleMenu(); } catch (e) { console.log(e); }
    mobileHeight();
    window.addEventListener("resize", mobileHeight);
    try { togglePopup(); } catch (e) { console.log(e); }
    initScroll();
    initSwiper();
    animateMarquee(document.querySelector(".project__ticker"), 30000);
    initTilt();
    try { initTimer(); } catch (e) { console.log(e); }
});

