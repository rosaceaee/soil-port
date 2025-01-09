import { useEffect } from "react";

/////////////////////////// [start] Nav Functions  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// nav click scroll evt
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleMouseEnter = (id, e, setIsHovered) => {
  if (setIsHovered) {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
  }
};

export const handleMouseLeave = (id, e, setIsHovered) => {
  if (setIsHovered) {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
  }
};

// blur elems with matched nav
export const useNavWithBlurEffect = (containerRef, navWrapRef) => {
  useEffect(() => {
    const container = containerRef.current;
    const navWrap = navWrapRef.current;
    const elements = container?.querySelectorAll(
      ".wrap p, .wrap h3, .work-con p, .work-container h2,.work-container h3, .work-container p"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (!navWrap) return;

        const navRect = navWrap.getBoundingClientRect();

        entries.forEach((entry) => {
          const elementRect = entry.target.getBoundingClientRect();

          // nav-wrap과의 겹침을 더 엄격하게 계산
          const isIntersecting =
            elementRect.bottom > navRect.top &&
            elementRect.top < navRect.bottom &&
            elementRect.right > navRect.left &&
            elementRect.left < navRect.right &&
            // 요소가 viewport 내에 있는지 확인
            elementRect.top < window.innerHeight &&
            elementRect.bottom > 0;

          entry.target.classList.toggle("cursor-hover", isIntersecting);
        });
      },
      {
        root: null,
        // rootMargin을 nav-wrap의 실제 높이에 맞게 조정
        rootMargin: "-20% 0px -20% 0px", // 위아래 여백을 줄임
        threshold: [0, 1.0], // threshold 값을 단순화
      }
    );

    elements?.forEach((element) => observer.observe(element));

    // 스크롤 이벤트에서도 체크하여 더 부드러운 전환 구현
    const handleScroll = () => {
      if (!navWrap) return;
      const navRect = navWrap.getBoundingClientRect();

      elements?.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const isIntersecting =
          elementRect.bottom > navRect.top &&
          elementRect.top < navRect.bottom &&
          elementRect.right > navRect.left &&
          elementRect.left < navRect.right &&
          elementRect.top < window.innerHeight &&
          elementRect.bottom > 0;

        element.classList.toggle("cursor-hover", isIntersecting);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
/////////////////////////// [END] Nav Functions  //////////////////////////////////

/////////////////////////// [START] GSAP Animation Function  //////////////////////////////////
export const useAnimateBoxes = (gsap) => {
  useEffect(() => {
    let ctx;

    const setAnimation = () => {
      ctx = gsap.context(() => {
        const boxes = gsap.utils.toArray(".ani");
        const isMobile = window.innerWidth < 768;

        boxes.forEach((box) => {
          gsap.fromTo(
            box,
            {
              y: isMobile ? 150 : 300,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: box,
                start: "top bottom",
                end: isMobile ? "top 20%" : "top 5%",
                scrub: true,
              },
            }
          );
        });
      });
    };

    setAnimation();

    const handleResize = () => {
      ctx?.revert();
      setAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx?.revert(); // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
/////////////////////////// [END] GSAP Animation Function   //////////////////////////////////

/////////////////////////// [Start] Nav Animation Function   //////////////////////////////////
export const DrawLinesNavElem = (scrollToSection) => {
  // 특정 state가 true가 되었을 때 onChange로 각 h3에 페이드인 애니메이션 클래스 토글.
  // 세로줄이 좌->우 방향으로 위에서 아래로 하나씩 0.05s로 드로잉 페이드인.
  // 그 후 가로줄도 세로줄과 같은 흐름으로 드로잉 페이드인.
  // 마크업 구조는 div 3개로. 기존 nav 마크업은 살리지않습니다.

  return (
    <>
      <section className="menu-container">
        <span className="wrap">
          <h3>one</h3>
          <h3>t</h3>
          <h3>th</h3>
        </span>
      </section>
    </>
  );
};
/////////////////////////// [END] Nav Animation Function   //////////////////////////////////

export const cursorClassName = (id, isHovered, setIsHovered) => {
  const base = "allign-r";
  const hoverIt = isHovered && isHovered[id] ? "cursor-toUp" : "";

  return `${base} ${hoverIt}`.trim();
};
