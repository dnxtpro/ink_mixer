import "./App.css";
import Mixer from "./assets/mixer.svg?react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
function App() {
  const cubo1Ref = useRef<SVGElement | null>(null);
  const cinta1Ref = useRef<SVGPathElement | null>(null);
  document.addEventListener("keydown",(event) =>{
    if(event.key === "Escape"){
      console.log()
      gsap.to("#Pedido",{
        scale:1,
        ease:"power2.inOut"
      })
    }
  })




  const pos1 = getPos("#x1");
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
  tl.to("#cubo1", { x: pos1?.x, duration: 2 }, "inicio");
  const t1 = gsap.timeline({ paused: true, repeat: -1 });
  gsap.set("#path22", {
    transformOrigin: "center center",
  });
  gsap.set("#path35", {
    transformOrigin: "center center",
  });
  gsap.set("#g25",{x:20})
  gsap.set("#g23",{y:15})
  t1.to("#path11", {
    fillOpacity: 1,
    duration: 1,
  })
    .to("#cubo", { x: 74, duration: 2 })
    .to("#g23", {
      duration: 1,
      translateY: 22,
    })
    .to("#path22", {
      scaleX: 0,
      duration: 1,
      repeat: 3, // 3 repeticiones más = 4 ciclos en total
      yoyo: true,
      ease: "power1.inOut",
    })
    .to("#restos",{
      opacity:0,
      duration:3
    },"-=3")

    .to("#g23", {
      delay: 1.5,
      duration: 1,
      translateY: 15,
    })
    .to("#g25", {
      duration: 1,
      x: 17,
    })
    .to("#path11", {
      fillOpacity: 0,
      duration: 3,
    })
    .to("#path23",{
      fillOpacity:1,
      duration:3,
    },"-=3")

    .to("#g25", {
      duration: 1,
      x: 20,
    })
    .to("#path11", {
      x: -30,
      duration: 1,
    })
    .to("#path11", {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  const t2 = gsap.timeline({ paused: true, repeat: 0 });
  t2.to("#l", {
    x: 40,
    duration: 2,
  })
    .to(
      "#xl",
      {
        x: 38,
        duration: 2,
      },
      "-=2"
    )
    .to(
      "#s",
      {
        x: 36,
        duration: 2,
      },
      "-=2"
    )
    .to("#cinta",{
      x:36,
      duration:2
    },"-=2")
    .to("#s1",{
      opacity:0,
      duration:.2
    },"-=1.5")
    .to("#l", {
      x: 62,
      y: -12,
      duration: 2,
    })
    .to(
      "#xl",
      {
        x: 71,
        duration: 2,
      },
      "-=2"
    )
    .to(
      "#s",
      {
        x: 79,
        y: 13,
        duration: 2,
      },
      "-=2"
    )
    .to(
      "#s",
      {
        x: 88,
        duration: 1.5,
      },
      "-=0.2"
    )
    .to(
      "#cuboxl",
      {
        fill: "white",
        fillOpacity: 1,
        duration: 1.5,
      },
      "-=1.5"
    )
    .to(
      "#cubol",
      {
        fill: "white",
        fillOpacity: 1,
        duration: 1.5,
      },
      "-=1.5"
    )
    .to("#cubos", {
      fill: "white",
      fillOpacity: 1,
      duration: 1.5,
    })
    .to("#l", {
      x: 72,
      duration: 0.75,
    })
    .to("#l", {
      x: 88,
      y: 0,
      duration: 0.5,
    })
    .to("#l", {
      x: 110,
      duration: 0.2,
    })
    .to("#xl", {
      x: 72,
    })
    .to("#xl", {
      x: 88,
    })
    .to("#xl", {
      x: 110,
      duration: .2,
    })
    .to("#s", {
      x: 89,
      duration: 0.75,
    })
    .to("#s", {
      x: 105,
      y: 0,
      duration: 0.5,
    })
    .to("#s", {
      x: 110,
      duration: 0.75,
    });
  const t3 = gsap.timeline({ paused: true, repeat: 0 });
  gsap.set("sensor",{
    scaleY:0
  });
  gsap.set("#g35",{y:72})
  gsap.set("#yell", {
    scaleY: 0,
  });
  gsap.set("#mag", {
    scaleY: 0,
  });
  gsap.set("#cya", {
    scaleY: 0,
  });
  gsap.set("#bla", {
    scaleY: 0,
  });
  // l a amarillo
  t3.to("#l", {
    x: 132,
    duration: 1,
  })
 
  .to("#al", {
    height:1.8,
    opacity:0.8,
    duration: 0.5,
  })
  .to("#yell",{
    scaleY:1,
  },"-=0.5")
  .to("#yell",{
    scaleY:0,
  })
  .to(
    "#xl",
    {
      x: 132,
      duration: 1,
    },
    "-=1"
  )
  .to(
    "#s",
    {
      x: 132,
      duration: 1,
    },
    "-=1"
  )
  // l a magenta
  .to("#l", {
    delay:1,
    x: 150,
    duration: 1,
  })
  .to("#ml",{
    height:3.5,
    opacity:0.8,
    duration: 0.5,
  })
  .to("#yell",{
    scaleY:1,
    duration:0.5,
  },"-=0.5")
  .to("#yell",{
    duration:0.2,
    scaleY:0,
  })
  .to("#mag",{
    scaleY:1,
  },"-=0.7")
  .to("#mag",{
    scaleY:0,
  },"-=0.2")
  // xl a amarillo
  .to("#xl", {
    x: 140,
    duration: 1,
  },"-=1.8")
  .to("#axl",{
    opacity:0.8,
    duration: 0.5,
  },"-=0.5")


  // l a cyan
  .to("#l", {
    x: 172,
    duration: 1,
  })
  .to("#xlc-8",{
    height:2.5,
    opacity:0.8,
    duration: 0.5,
  })
  .to("#yell",{
    scaleY:1,
    duration:0.5,
  },"-=0.5")
  .to("#yell",{
    scaleY:0,
    duration:0.2,
  })
  .to("#mag",{
    scaleY:1,
    duration:0.5,
  },"-=0.7")
  .to("#mag",{
    scaleY:0,
    duration:0.2,
  },"-=0.2")
  .to("#cya",{
    scaleY:1,
  },"-=0.9")
  .to("#cya",{
    scaleY:0,
  },"-=0.4")

  .to("#xl", {
    x: 160,
    duration: 1,
  },"-=1.8")
  .to("#s", {
    x: 149,
    duration: 1,
  },"-=1.5")
  .to("#xlm",{
    height:1.2,
    opacity:0.8,
    duration: 0.5,
  },"-=0.5")
  .to("#as",{
    opacity:0.8,
    duration: 0.5,
  },"-=0.5")


  // l a negro
  .to("#l", {
    x: 191,
    duration: 1,
  })
  .to("#xlb-9",{
    height:1.5,
    opacity:0.8,
    duration: 0.5,
  })
  .to("#mag",{
    duration :0.5, 
    scaleY:1,
  },"-=0.7")
  .to("#mag",{
    scaleY:0,
  },"-=0.2")
  .to("#cya",{
    duration:0.5,
    scaleY:1,
  },"-=0.9")
  .to("#cya",{
    duration:0.2,
    scaleY:0,
  },"-=0.4")
  .to("#bla",{
    duration:0.5,
    scaleY:1,
  },"-=1.1")
  .to("#bla",{
    duration:0.2,
    scaleY:0,
  },"-=0.2")
  .to("#xl", {
    x: 182,
    duration: 1,
  },"-=2")
  .to("#s", {
    x: 168,
    duration: 1,
  },"-=1.8")
  .to("#xlc",{
    height:2,
    opacity:0.8,
    duration: 0.5,
  },"-=0.5")
  .to("#sm",{
    height:3,
    opacity:0.8,
    duration: 0.5,
  },"-=0.5")
  .to("#l",{
    x:230,
    duration:2,
  })
  .to("#xl",{
    x:200,
    duration:2,
  } ,"-=2")
  .to("#s",{
    x:190,
    duration:2,
  },"-=2")
  .to("#cya",{
    duration:0.5,
    scaleY:1,
  })
  .to("#cya",{
    duration:0.2,
    scaleY:0,
  })
  .to("#bla",{
    duration:0.5,
    scaleY:1,
  },"-=0.7")
  .to("#bla",{
    duration:0.2,
    scaleY:0,
  },"-=0.2")
  .to("#sc",{
    height:1,
    opacity:0.8,
    duration: 0.5,
  })
  .to("#xlb",{
    height:1,
    opacity:0.8,
    duration:0.5
  },"-=0.5")
  .to("#xl",{
    x:230,
    duration:2,
  })
  .to("#s",{
    x:210
  },"-=2")
  .to("#bla",{
   scaleY:1,
   duration:0.5
  })
  .to("#bla",{
   scaleY:0,
   duration:0.2
  })
  
  .to("#sb",{
    height:3.5,
    opacity:.8,
    duration:0.5,
  })
  .to("#s",{
    x:230,
    duration:2,
  })
  .to("#l",{
    x:241,
    duration:1,
  })
  .to("#g35",{
    y:92,
    duration:1
  })
  .to("#path35",{
    scaleX: 0,
    duration: 1,
    repeat: 3, // 3 repeticiones más = 4 ciclos en total
    yoyo: true,
    ease: "power1.inOut",
  })
  .to("#cubol",{
    fill:"#C2B6CE",
    fillOpacity:1,
    duration:3,
  },"-=3")
  .to("#al,#xlc-8,#ml,#xlb-9",{
    opacity:0,
    duration:1
  },"-=3")
  .to("#g35",{
    y:72
  })
  .to("#xl",{
    x:249,
    duration:1,
  })
  .to("#l",{
    x:265,
    duration:1,
  },"-=1")
  .to("#g35",{
    y:92,
    duration:1
  })
  .to("#path35",{
    scaleX: 0,
    duration: 1,
    repeat: 3, // 3 repeticiones más = 4 ciclos en total
    yoyo: true,
    ease: "power1.inOut",
  })
  .to("#cuboxl",{
    fill:"#CBB7DA",
    fillOpacity:1,
    duration:3,
  },"-=3")
  .to("#axl,#xlc,#xlm,#xlb",{
    opacity:0,
    duration:1
  },"-=3")
  .to("#g35",{
    y:72
  })
  .to("#xl",{
    x:265,
    duration:1,
  },"sex")
  .to("#s",{
    x:258
  })
  .to("#g35",{
    y:92,
    duration:1
  })
  .to("#path35",{
    scaleX: 0,
    duration: 1,
    repeat: 3, // 3 repeticiones más = 4 ciclos en total
    yoyo: true,
    ease: "power1.inOut",
  })
  .to("#cubos",{
    fill:"#5E4864",
    fillOpacity:1,
    duration:3,
  },"-=3")
  .to("#as,#sm,#sc,#sb",{
    opacity:0,
    duration:1
  },"-=3")
  .to("#g35",{
    y:72
  })
  .to("#xl",{
    x:265,
    duration:1,
  })
  .to("#sensor",{
    scaleY:1,
    duration:.5
  })
  .to("#sensor",{
    scaleY:0,
    duration:.2
  })
  .to("#text39,#tspan45,#tspan44",{
    fill:"#00be00",
    duration:0.5
  })
  .to("#l",{
    x:280,
    duration:1
  })
  .to("#xl",{
    x:270,
    duration:1,
  },"-=1")
  .to("#sensor",{
    scaleY:1,
    duration:.5
  })
  .to("#sensor",{
    scaleY:0,
    duration:.2
  })
  .to("#text39,#tspan45,#tspan44",{
    fill:"#da1a21",
    duration:0.5
  })
  .to("#xl",{
    y:25,
  })
  .to("#xl",{
    x:120,
  })
  .to("#s",{
    x:280,
  })
  .to("#sensor",{
    scaleY:1,
    duration:.5
  })
  .to("#sensor",{
    scaleY:0,
    duration:.2
  })
  .to("#text39,#tspan45,#tspan44",{
    fill:"#00be00",
    duration:0.5
  },"-=0.2")
  .to("#s",{
    x:290,
  })
  .to("#l",{
    delay:2,
    x:291
  })
  .to("#g53",{
    y:90,
    duration:.5
  },"wow")
  .to("#g56",{
    y:107,
    duration:.5
  },"-=.5")
  
  .to("#g53",{
    delay:1.5,
    duration:.2,
    y:80,
  })
  .to("#g56",{
    y:110,
    duration:.2
  },"-=.2")
  .to("#path2",{
    opacity:1,
  })
  .to("#l",{
    x:318
  })
  .to("#s",{
    x:308
  })
  .to("#g53",{
    y:94,
    duration:.5
  })
  .to("#g56",{
    y:107,
    duration:.5
  },"-=.5")
  
  .to("#g53",{
    delay:1.5,
    duration:.2,
    y:80,
  })
  .to("#g56",{
    y:110,
    duration:.2
  },"-=.2")
  .to("#path1",{
    opacity:1,
  })
  .to("#s",{
    x:320
  })
  
  
  useEffect(() => {
    t2.play();
  }, []);

  return (
    <>
      <div className="fondo">
        <button onClick={() => t1.play()} />
        <button onClick={() => t2.play()} />
        <button onClick={() => t3.play("sex")} />
        <Mixer
          onClick={(e) => {
            const target = e.target as SVGElement;
            if (target.closest("#almacen")) {
              console.log("Grupo 'almacen' clickeado");
              gsap.to("#Pedido", {
                scale: 1,
                opacity:1,
                duration: 1,
                ease: "power2.out"
              });
              t1.play();
            }
            else if (target.closest("#Llenado_de_base")) {
              console.log("Grupo 'almacen' clickeado");
              gsap.to("#Pedido", {
                scale: 1,
                opacity:1,
                duration: 1,
                ease: "power2.out"
              });
              t2.play();
            }
            else if (target.closest("#pigmento")) {
              console.log("Grupo 'almacen' clickeado");
              gsap.to("#Pedido", {
                scale: 1,
                opacity:1,
                duration: 1,
                ease: "power2.out"
              });
              t3.play();
            }
            else if (target.closest("#sellado")) {
              console.log("Grupo 'almacen' clickeado");
              gsap.to("#Pedido", {
                scale: 1,
                opacity:1,
                duration: 1,
                ease: "power2.out"
              });
              t3.play("wow");
            }
            else if(target.closest("#Pedido")){
              gsap.set("#Pedido",{transformOrigin: "center center"})
              gsap.to("#Pedido", {
                scale: 3,
                opacity:1,
                duration: 1,
                ease: "power2.out"
              });
            }
          }}
          className="ancho"
          
          ref={(node) => {
            if (node) {
              const cubo1 = node.querySelector("#cubo1");
              const cinta1 = node.querySelector("#cinta1");
              if (cinta1) cinta1Ref.current = cinta1 as SVGPathElement;
              if (cubo1) cubo1Ref.current = cubo1 as SVGElement;
            }
          }}
        />
      </div>
    </>
  );
}

export default App;

function getPos(id: string) {
  const el = document.querySelector(id);
  const bbox = el?.getBoundingClientRect();
  if (bbox)
    return {
      x: bbox.left,
      y: bbox.top + window.scrollY,
    };
}
