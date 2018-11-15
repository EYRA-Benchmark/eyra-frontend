import * as React from "react";
import * as styles from "./Home.css";

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={`${styles.image} ${styles.banner_image}`}>
            <div className={styles.caption}>
              <span className={styles.article}>
                Benchmark For Your Algorithms
              </span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Parallax Demo</h3>
          <p>
            Parallax scrolling is a web site trend where the background content
            is moved at a different speed than the foreground content while
            scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis
            nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit
            pellentesque a, magna turpis est sapien duis blandit dignissim.
            Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
            consequat morbi, curabitur aliquam pede, nullam vitae eu placerat
            eget et vehicula. Varius quisque non molestie dolor, nunc nisl
            dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus
            pulvinar, in in neque risus odio. Accumsan fringilla vulputate at
            quibusdam sociis eleifend, aenean maecenas vulputate, non id
            vehicula lorem mattis, ratione interdum sociis ornare. Suscipit
            proin magna cras vel, non sit platea sit, maecenas ante augue etiam
            maecenas, porta porttitor placerat leo.
          </p>
        </div>
        <div className={`${styles.image} ${styles.bgimg_2}`} />

        <div style={{ position: "relative" }}>
          <div className={`${styles.image} ${styles.bgimg_3}`}>
            {/* <div class="caption">
              <span class="border">SCROLL UP</span>
              </div> */}
          </div>
          <div style={{ position: "relative" }}>
            <div className={styles.section4}>
              <p>
                Scroll up and down to really get the feeling of how Parallax
                Scrolling works.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
