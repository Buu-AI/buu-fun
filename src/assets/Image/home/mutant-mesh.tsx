"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function MutantMesh() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");
      // Set initial state for all paths
      paths.forEach((path) => {
        const length = path.getTotalLength();
        // Set up the starting position
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.opacity = "0.6";
      });

      // Animate each path
      paths.forEach((path, index) => {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          delay: index * 0.04, // Stagger effect
          ease: "power2.inOut",
        });
      });
    }
  }, []);
  return (
    <svg
      ref={svgRef}
      viewBox="-130 -80 750 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <foreignObject x="326" y="328" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_0_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="379"
          cy="381"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="336" y="338" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_1_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="379"
          cy="381"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="-7" y="328" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_2_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="46"
          cy="381"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="3" y="338" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_3_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="46"
          cy="381"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="13" y="229" width="106" height="106">
          <div
            // style="backdrop-filter:blur(20px);clip-path:url(#bgblur_4_4043_9574_clip_path);height:100%;width:100%"
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_4_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="66"
          cy="282"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="23" y="239" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_5_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="66"
          cy="282"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="310" y="229" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_6_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="363"
          cy="282"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="320" y="239" width="86" height="86">
          <div
            // style="backdrop-filter:blur(20px);clip-path:url(#bgblur_7_4043_9574_clip_path);height:100%;width:100%"
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_7_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="363"
          cy="282"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="259" y="104" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_8_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="312"
          cy="157"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="269" y="114" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_9_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="312"
          cy="157"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="50" y="104" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_10_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="103"
          cy="157"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="60" y="114" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_11_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="103"
          cy="157"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="150" y="67" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_12_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="120"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="160" y="77" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_13_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="120"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="150" y="104" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_14_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="157"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="160" y="114" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_15_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="157"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="150" y="199" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_16_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="252"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="160" y="209" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_17_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="252"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <g opacity="0.6">
        <foreignObject x="150" y="289" width="106" height="106">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_18_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="342"
          r="12.5"
          fill="#344353"
          fillOpacity="0.06"
          stroke="#5E748B"
        />
        <foreignObject x="160" y="299" width="86" height="86">
          <div
            style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_19_4043_9574_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="40"
          cx="203"
          cy="342"
          r="3"
          fill="#78DBFF"
        />
      </g>
      <path
        opacity="0.6"
        d="M325 403.5L353.5 340.5H408.5L400.5 417M325 403.5L400.5 417M325 403.5V421.5L390.5 435L400.5 417"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M310.5 263.5L346.5 333.5L413 311L374.5 222.5M310.5 263.5L374.5 222.5M310.5 263.5V250L358.5 218.5L374.5 222.5"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M244.5 154L293 240L366.5 198.5L305.5 104M244.5 154L305.5 104M244.5 154V138L285 96L305.5 104"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M169.5 170.5L138 58.5L264.5 54.5L238 170.5M169.5 170.5H238M169.5 170.5L174.5 185H234.5L238 170.5"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M184 12L168.5 116M184 12L122 5.5M184 12L193 7M168.5 116L106.5 92.5L122 5.5M168.5 116L187.5 109L193 7M122 5.5L131 1L193 7"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M213.5 12L229 116M213.5 12L275.5 5.5M213.5 12L204.5 7M229 116L291 92.5L275.5 5.5M229 116L210 109L204.5 7M275.5 5.5L266.5 1L204.5 7"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M90 403.5L61.5 340.5H6.5L14.5 417M90 403.5L14.5 417M90 403.5V421.5L24.5 435L14.5 417"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M104.5 263.5L68.5 333.5L2 311L40.5 222.5M104.5 263.5L40.5 222.5M104.5 263.5V250L56.5 218.5L40.5 222.5"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M170.5 154L122 240L48.5 198.5L109.5 104M170.5 154L109.5 104M170.5 154V138L130 96L109.5 104"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M107 174.5L131 265H287.5L301 174.5M107 174.5H301M107 174.5L124 154H287.5L301 174.5"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M123.5 325.5L136.5 271.5H282L293 325.5H123.5Z"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M124 477L37.5 458L112.5 333L190.5 340M124 477L190.5 340M124 477H147L201.5 353.5L190.5 340"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M285 477L371.5 458L296.5 333L218.5 340M285 477L218.5 340M285 477H262L207.5 353.5L218.5 340"
        stroke="#616F81"
        strokeWidth="1.5"
      />
      <defs>
        <clipPath
          id="bgblur_0_4043_9574_clip_path"
          transform="translate(-326 -328)"
        >
          <circle cx="379" cy="381" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_1_4043_9574_clip_path"
          transform="translate(-336 -338)"
        >
          <circle cx="379" cy="381" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_2_4043_9574_clip_path"
          transform="translate(7 -328)"
        >
          <circle cx="46" cy="381" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_3_4043_9574_clip_path"
          transform="translate(-3 -338)"
        >
          <circle cx="46" cy="381" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_4_4043_9574_clip_path"
          transform="translate(-13 -229)"
        >
          <circle cx="66" cy="282" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_5_4043_9574_clip_path"
          transform="translate(-23 -239)"
        >
          <circle cx="66" cy="282" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_6_4043_9574_clip_path"
          transform="translate(-310 -229)"
        >
          <circle cx="363" cy="282" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_7_4043_9574_clip_path"
          transform="translate(-320 -239)"
        >
          <circle cx="363" cy="282" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_8_4043_9574_clip_path"
          transform="translate(-259 -104)"
        >
          <circle cx="312" cy="157" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_9_4043_9574_clip_path"
          transform="translate(-269 -114)"
        >
          <circle cx="312" cy="157" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_10_4043_9574_clip_path"
          transform="translate(-50 -104)"
        >
          <circle cx="103" cy="157" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_11_4043_9574_clip_path"
          transform="translate(-60 -114)"
        >
          <circle cx="103" cy="157" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_12_4043_9574_clip_path"
          transform="translate(-150 -67)"
        >
          <circle cx="203" cy="120" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_13_4043_9574_clip_path"
          transform="translate(-160 -77)"
        >
          <circle cx="203" cy="120" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_14_4043_9574_clip_path"
          transform="translate(-150 -104)"
        >
          <circle cx="203" cy="157" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_15_4043_9574_clip_path"
          transform="translate(-160 -114)"
        >
          <circle cx="203" cy="157" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_16_4043_9574_clip_path"
          transform="translate(-150 -199)"
        >
          <circle cx="203" cy="252" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_17_4043_9574_clip_path"
          transform="translate(-160 -209)"
        >
          <circle cx="203" cy="252" r="3" />
        </clipPath>
        <clipPath
          id="bgblur_18_4043_9574_clip_path"
          transform="translate(-150 -289)"
        >
          <circle cx="203" cy="342" r="12.5" />
        </clipPath>
        <clipPath
          id="bgblur_19_4043_9574_clip_path"
          transform="translate(-160 -299)"
        >
          <circle cx="203" cy="342" r="3" />
        </clipPath>
      </defs>
    </svg>
  );
}
