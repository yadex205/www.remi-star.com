import React from 'react';

interface Props {
  images: { path: string, center?: string; caption: string }[];
}

interface States {
  currentIndex: number;
}

export default class MainVisual extends React.Component<Props, States> {
  private length: number;
  private timer: number;

  constructor(props: Props) {
    super(props);

    this.length = props.images.length;
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  private nextSlide() {
    if (this.state.currentIndex + 1 >= this.length) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }

  render() {
    return (
      <div className="m-main-visual">
        <figure className="m-main-visual__carousel">
          <ul className="m-main-visual__carousel-slide-container">
            {this.props.images.map((img, index) => (
              <li className={index === this.state.currentIndex ? 'active' : ''}
                  style={{
                    backgroundImage: `url(${img.path})`,
                    backgroundPosition: img.center || 'center'
                  }}
                  key={index} />
            ))}
          </ul>
          <figcaption className="m-main-visual__carousel-caption">
            {this.props.images.map((img, index) => (
              <div className={index === this.state.currentIndex ? 'active' : ''}
                   key={index}>{img.caption}</div>
            ))}
          </figcaption>
        </figure>
      </div>
    );
  }
}
