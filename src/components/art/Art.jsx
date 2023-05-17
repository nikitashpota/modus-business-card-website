import React from "react";
import "./Art.css";
import { gsap } from "gsap";

const Art = () => {
  React.useEffect(() => {
    var colors = ["#80475e", "#cc5a71", "#c89b7b", "#f0f757"];

    window.onload =
      window.onclick =
      window.ontouchend =
        () => {
          gsap
            .timeline({
              defaults: {
                duration: 1,
                overwrite: true,
                attr: {
                  stroke: () =>
                    colors[gsap.utils.random(0, colors.length - 1, 1)],
                },
              },
            })
            .fromTo(
              "#g1 path",
              { drawSVG: () => (Math.random > 0.5 ? "100% 100%" : 0) },
              { drawSVG: "0% 100%", stagger: { amount: 5, from: "random" } },
              0
            )
            .fromTo(
              "#g2 path",
              { drawSVG: () => (Math.random > 0.5 ? "100% 100%" : 0) },
              { drawSVG: "0% 100%", stagger: { amount: 4, from: "random" } },
              "-=3"
            );
        };
  });
  return (
    <div className="art">
      <svg viewBox="0 0 532 820">
        <mask id="m1" stroke="#000" strokeWidth="35" fill="none">
          <image href="https://assets.codepen.io/721952/squiggles.png" />
        </mask>

        <rect fill="rgba(0,0,0,0.25)" width="100%" height="100%" />

        <g id="g1" mask="url(#m1)" strokeWidth="26" fill="none">
          <path d="M23.7,0c10.3,15,42,38,74.7,0" />
          <path d="M0,36.3c14.5,13.2,80.5,27.2,49.5,88.2" />
          <path d="M128.5,25.5c18-33,59-6,74-34" />
          <path d="M156.5,59.5c-27-9-53-18-54,34s-25,51-25,51" />
          <path d="M59.7,174C49.5,156.5,30.5,155.2,0,190.3" />
          <path d="M15.5,97.5c-51.9-31.6-63.1,25.5-13,55" />
          <path d="M147.7,80.4c-23.2,13.1-12.2,72.1,49.8,34.1" />
          <path d="M180.5,87.5c5-36,26-74,64-30s70.3-1.5,47.2-37.8" />
          <path d="M257.3,24.5c-41.8-66,59.2-49,43.2-16" />
          <path d="M337.5-5.5c-15,35,53.7,71,54.8,5.5" />
          <path d="M388.5,77.5c40-7,66-143,123.8-57.8" />
          <path d="M527.5,77.5c-12-38-77-52-73.1,20.6" />
          <path d="M307.5,108.5c10-17,37-45,63.5,0" />
          <path d="M321.5,140.5c79,7,67-53,110-16c25,21.5,74,12,57.5-47" />
          <path d="M296.5,240.5c-10-29-49-56-34-72s56-27,28-55" />
          <path d="M215.5,64.5c-6,16,25,50,21,74s-20,35-15,64" />
          <path d="M180.5,216.3c5-16.8,5.3-84.8-58.8-39.3" />
          <path d="M0,247c7.5-25.5,53.5,14.5,71.5,1.5s-9-48.1,6-59.5s32-1.5,39.5,16" />
          <path d="M88.5,261.5c32,24,55,59-11,77.5" />
          <path d="M152.1,329.7c-1.6-25.2-0.6-44.2,25.4-47.2" />
          <path d="M130.5,197.7c19,32.8,38.7,40.8,59.8,42.8s12.2,39.2,7.2,65.6c-5,26.4,18.6,27.1,28.3,28.2" />
          <path d="M218.5,235.5c41-41,76,47,7.3,34.2" />
          <path d="M327.5,231.5c-20-70,61-68,45.5,0" />
          <path d="M406.9,274.3c-10.4-57.8,40.6-57.8-18.4-112.8" />
          <path d="M443.5,192.5c35-39,72-11,88.5-19.5" />
          <path d="M518.3,144.5c7.2-56,66.2-60,52.2-98C553-0.9,523,36.3,523,36.3" />
          <path d="M435.7,231.5c51.8,9,56.8-54,96.8-2" />
          <path d="M375,285.7c-11.5-38.2-39.5-61.2-69.5,14.8c-17.3,43.7-59.8,3.6-59.8,3.6" />
          <path d="M435.7,271c7.8,37.5-23.5,55.5-60.7,42c-45.5-16.5-50.7,33.3-50.7,33.3" />
          <path d="M523,276.3c-7.5-49.8-76-9.7-32.2,30.8" />
          <path d="M436.9,329.7c55.6,36.8,64.6-24.2,95.1-32.7" />
          <path d="M484.1,383.7c0,0,11.4-27.5,47.9-27.3c36.5,0.2,41.5,24.8,0.5,70" />
          <path d="M363.8,334.3c33.7,60.2-64.2,83.8-63.8,12" />
          <path d="M246.7,339c31.8,21.5,34.2,36.5,15,71c-19.2,34.5-4.2,58.5,33.8,43.5" />
          <path d="M245.7,369.8c-38.2,20.7-52.7-25.1-93.6-13.8c-34.6,9.5-47.6,18.5-66.6,10.5" />
          <path d="M106.5,412.5c-60-2-61-40-57-83S3.6,266,3.6,266" />
          <path d="M-18.5,431.5c0,0,46.1-27.4,14-62c-50.5-54.3-34-119,13-43" />
          <path d="M60,462c-14.5-10.5-41.5-22.8-61,2.3" />
          <path d="M141.5,436.5c-27-56,56.7-57.3,52.8-13.2" />
          <path d="M525.2,383.7c-9.7,42.8-56.3,49.1-69.7,20.8c-19-40-58-42-70-9c-13,35.8-28,36-28,36" />
          <path d="M284.5,424.5c52-12,73,25,64.1,68.5" />
          <path d="M436.9,439c-30.4-16.5-55.4,7.8-36.9,44.7" />
          <path d="M379.5,511.5c65.9,20.8,76-114,131.8-41.5" />
          <path d="M248.7,494c-24.2-9.5-28.2-54.5-78.7-57.5" />
          <path d="M187.5,470.5c-59,31-58-53-117.2-12.4" />
          <path d="M504.5,523.5c14-6,57-23,28-64.8" />
          <path d="M492.3,523.5c-50.8-25-31.8,20-74.8,51.5" />
          <path d="M295.5,483.7c-67,39.8,34,71.5,12,128.7" />
          <path d="M370.9,555c-5.4-44.5-42.5-56.1-72.4-40.3" />
          <path d="M33,477.5c8.5,6,15.2,30,3.3,47" />
          <path d="M1.1,494c2.4,28.5,10.1,67.5,51.3,61s3.2-83.5,61.2-67.5" />
          <path d="M171,529.7c-29.5-42.2-97.5,1.8-34.5,48.7" />
          <path d="M246.7,516.2c-17.2,46.3-70.2,15.3-84.7,55.8s18.5,51.8,26.5,79.7" />
          <path d="M225.8,633c-35.3-52.5,15.9-78.2,45.3-63.3" />
          <path d="M-5,672.3c18.5-20.8-13.5-47.8,18.5-68.8c42.4-27.9,57,30,97.1-15.8" />
          <path d="M405,548c-27.5,36.5-69,36.2-65.8,64.3c3.2,28.2,34.7,30.6,63.2,28.2c29.6-2.5,44,21.5,43,47" />
          <path d="M370.9,612.3c21.6-21.8,42,6.8,72.6-13.1c32-20.8,66.3,44.6,14.2,53.4" />
          <path d="M469.5,735.5c39-8,50.2-30.6,41.8-95.8c-2.8-22.2,71.2-56.2-14.3-94.2" />
          <path d="M375,687.5c-41.5-15-31.7-39.3-79.5-31c-52,9-47-53-7.8-48.8" />
          <path d="M140.8,647.5c-45.3-35-48,44.9-86.3,38c-39-7-19-55,8.5-45" />
          <path d="M20.5,695.5c-29,13-10,49-10,49" />
          <path d="M149.5,662.5c-9,44,30,45,42,25s36.9-34,54-23" />
          <path d="M134.1,708c-53.6,1.5-30.6,55.5-30.6,55.5" />
          <path d="M42.7,705.9c21.8,21.6,42.6,58-13.9,62.5c-77.3,6.2-2.4,62.7-2.4,62.7" />
          <path d="M51,830c52.5-88.5,77.5-3.5,119-18.3" />
          <path d="M248.7,712.7c-32.2-18.2-69.8,59.8,0,56.3" />
          <path d="M236.9,805.6c36.6,2.9,53-15.2,38.3-58.1s19.4-64,42.4-47.5" />
          <path d="M339.1,781c-22.6-9.5-39.6-63.8,18.4-64.7" />
          <path d="M310.7,801.7c-0.2,14.8-0.2,47.2-92.2,24c-50.6-12.7,0-90.2-88-75.3" />
          <path d="M410.5,677.5c15,39-23.8,33.7-31.9,59.8c-8.1,26.2,10.5,63.2-42.8,76.7" />
          <path d="M502.5,749.2c36-3.7,74.3,17.5,31.5,45.5c-13.5,8.8-38.1-23.2-71.5-16.2c-38,8-75.8-45.3-4.8-72.6 c26.8-10.4,27-19.9,27-19.9" />
          <path d="M393.7,781c57.8,73.5,87.9,2.3,114.8,59.5c0,0-78,23-130.5-26.5" />
          <path d="M532,537c13.5,13.5,36.5,102.2-3,143.3" />
        </g>

        <g id="g2" mask="url(#m1)" strokeWidth="66" fill="none">
          <path d="M23.7,0c10.3,15,42,38,74.7,0" />
          <path d="M0,36.3c14.5,13.2,80.5,27.2,49.5,88.2" />
          <path d="M128.5,25.5c18-33,59-6,74-34" />
          <path d="M156.5,59.5c-27-9-53-18-54,34s-25,51-25,51" />
          <path d="M59.7,174C49.5,156.5,30.5,155.2,0,190.3" />
          <path d="M15.5,97.5c-51.9-31.6-63.1,25.5-13,55" />
          <path d="M147.7,80.4c-23.2,13.1-12.2,72.1,49.8,34.1" />
          <path d="M180.5,87.5c5-36,26-74,64-30s70.3-1.5,47.2-37.8" />
          <path d="M257.3,24.5c-41.8-66,59.2-49,43.2-16" />
          <path d="M337.5-5.5c-15,35,53.7,71,54.8,5.5" />
          <path d="M388.5,77.5c40-7,66-143,123.8-57.8" />
          <path d="M527.5,77.5c-12-38-77-52-73.1,20.6" />
          <path d="M307.5,108.5c10-17,37-45,63.5,0" />
          <path d="M321.5,140.5c79,7,67-53,110-16c25,21.5,74,12,57.5-47" />
          <path d="M296.5,240.5c-10-29-49-56-34-72s56-27,28-55" />
          <path d="M215.5,64.5c-6,16,25,50,21,74s-20,35-15,64" />
          <path d="M180.5,216.3c5-16.8,5.3-84.8-58.8-39.3" />
          <path d="M0,247c7.5-25.5,53.5,14.5,71.5,1.5s-9-48.1,6-59.5s32-1.5,39.5,16" />
          <path d="M88.5,261.5c32,24,55,59-11,77.5" />
          <path d="M152.1,329.7c-1.6-25.2-0.6-44.2,25.4-47.2" />
          <path d="M130.5,197.7c19,32.8,38.7,40.8,59.8,42.8s12.2,39.2,7.2,65.6c-5,26.4,18.6,27.1,28.3,28.2" />
          <path d="M218.5,235.5c41-41,76,47,7.3,34.2" />
          <path d="M327.5,231.5c-20-70,61-68,45.5,0" />
          <path d="M406.9,274.3c-10.4-57.8,40.6-57.8-18.4-112.8" />
          <path d="M443.5,192.5c35-39,72-11,88.5-19.5" />
          <path d="M518.3,144.5c7.2-56,66.2-60,52.2-98C553-0.9,523,36.3,523,36.3" />
          <path d="M435.7,231.5c51.8,9,56.8-54,96.8-2" />
          <path d="M375,285.7c-11.5-38.2-39.5-61.2-69.5,14.8c-17.3,43.7-59.8,3.6-59.8,3.6" />
          <path d="M435.7,271c7.8,37.5-23.5,55.5-60.7,42c-45.5-16.5-50.7,33.3-50.7,33.3" />
          <path d="M523,276.3c-7.5-49.8-76-9.7-32.2,30.8" />
          <path d="M436.9,329.7c55.6,36.8,64.6-24.2,95.1-32.7" />
          <path d="M484.1,383.7c0,0,11.4-27.5,47.9-27.3c36.5,0.2,41.5,24.8,0.5,70" />
          <path d="M363.8,334.3c33.7,60.2-64.2,83.8-63.8,12" />
          <path d="M246.7,339c31.8,21.5,34.2,36.5,15,71c-19.2,34.5-4.2,58.5,33.8,43.5" />
          <path d="M245.7,369.8c-38.2,20.7-52.7-25.1-93.6-13.8c-34.6,9.5-47.6,18.5-66.6,10.5" />
          <path d="M106.5,412.5c-60-2-61-40-57-83S3.6,266,3.6,266" />
          <path d="M-18.5,431.5c0,0,46.1-27.4,14-62c-50.5-54.3-34-119,13-43" />
          <path d="M60,462c-14.5-10.5-41.5-22.8-61,2.3" />
          <path d="M141.5,436.5c-27-56,56.7-57.3,52.8-13.2" />
          <path d="M525.2,383.7c-9.7,42.8-56.3,49.1-69.7,20.8c-19-40-58-42-70-9c-13,35.8-28,36-28,36" />
          <path d="M284.5,424.5c52-12,73,25,64.1,68.5" />
          <path d="M436.9,439c-30.4-16.5-55.4,7.8-36.9,44.7" />
          <path d="M379.5,511.5c65.9,20.8,76-114,131.8-41.5" />
          <path d="M248.7,494c-24.2-9.5-28.2-54.5-78.7-57.5" />
          <path d="M187.5,470.5c-59,31-58-53-117.2-12.4" />
          <path d="M504.5,523.5c14-6,57-23,28-64.8" />
          <path d="M492.3,523.5c-50.8-25-31.8,20-74.8,51.5" />
          <path d="M295.5,483.7c-67,39.8,34,71.5,12,128.7" />
          <path d="M370.9,555c-5.4-44.5-42.5-56.1-72.4-40.3" />
          <path d="M33,477.5c8.5,6,15.2,30,3.3,47" />
          <path d="M1.1,494c2.4,28.5,10.1,67.5,51.3,61s3.2-83.5,61.2-67.5" />
          <path d="M171,529.7c-29.5-42.2-97.5,1.8-34.5,48.7" />
          <path d="M246.7,516.2c-17.2,46.3-70.2,15.3-84.7,55.8s18.5,51.8,26.5,79.7" />
          <path d="M225.8,633c-35.3-52.5,15.9-78.2,45.3-63.3" />
          <path d="M-5,672.3c18.5-20.8-13.5-47.8,18.5-68.8c42.4-27.9,57,30,97.1-15.8" />
          <path d="M405,548c-27.5,36.5-69,36.2-65.8,64.3c3.2,28.2,34.7,30.6,63.2,28.2c29.6-2.5,44,21.5,43,47" />
          <path d="M370.9,612.3c21.6-21.8,42,6.8,72.6-13.1c32-20.8,66.3,44.6,14.2,53.4" />
          <path d="M469.5,735.5c39-8,50.2-30.6,41.8-95.8c-2.8-22.2,71.2-56.2-14.3-94.2" />
          <path d="M375,687.5c-41.5-15-31.7-39.3-79.5-31c-52,9-47-53-7.8-48.8" />
          <path d="M140.8,647.5c-45.3-35-48,44.9-86.3,38c-39-7-19-55,8.5-45" />
          <path d="M20.5,695.5c-29,13-10,49-10,49" />
          <path d="M149.5,662.5c-9,44,30,45,42,25s36.9-34,54-23" />
          <path d="M134.1,708c-53.6,1.5-30.6,55.5-30.6,55.5" />
          <path d="M42.7,705.9c21.8,21.6,42.6,58-13.9,62.5c-77.3,6.2-2.4,62.7-2.4,62.7" />
          <path d="M51,830c52.5-88.5,77.5-3.5,119-18.3" />
          <path d="M248.7,712.7c-32.2-18.2-69.8,59.8,0,56.3" />
          <path d="M236.9,805.6c36.6,2.9,53-15.2,38.3-58.1s19.4-64,42.4-47.5" />
          <path d="M339.1,781c-22.6-9.5-39.6-63.8,18.4-64.7" />
          <path d="M310.7,801.7c-0.2,14.8-0.2,47.2-92.2,24c-50.6-12.7,0-90.2-88-75.3" />
          <path d="M410.5,677.5c15,39-23.8,33.7-31.9,59.8c-8.1,26.2,10.5,63.2-42.8,76.7" />
          <path d="M502.5,749.2c36-3.7,74.3,17.5,31.5,45.5c-13.5,8.8-38.1-23.2-71.5-16.2c-38,8-75.8-45.3-4.8-72.6 c26.8-10.4,27-19.9,27-19.9" />
          <path d="M393.7,781c57.8,73.5,87.9,2.3,114.8,59.5c0,0-78,23-130.5-26.5" />
          <path d="M532,537c13.5,13.5,36.5,102.2-3,143.3" />
        </g>
      </svg>
    </div>
  );
};

export default Art;
