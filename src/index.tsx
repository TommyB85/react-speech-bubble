import * as React from "react";
import "./styles.css";

enum BubbleStyle {
  right = "right",
  left = "left",
}

interface BubbleProps {
  message?: string;
  sender?: string;
  timeSent?: string;
  bubbleStyle?: BubbleStyle;
  textColor?: string;
  bgColor?: string;
}

const Bubble: React.FC<BubbleProps> = (props: {
  message?: string;
  sender?: string;
  timeSent?: string;
  bubbleStyle?: BubbleStyle;
  textColor?: string;
  bgColor?: string;
}) => {
  return (
    <div className="container">
      <div
        className={
          props.bubbleStyle === BubbleStyle.left
            ? "wrapper-left"
            : "wrapper-right"
        }
      >
        <p
          className={
            props.bubbleStyle === BubbleStyle.left ? "receive" : "send"
          }
          style={{ color: props.textColor, background: props.bgColor }}
        >
          {props.message}
        </p>
        <div
          id="Details"
          className={
            props.bubbleStyle === BubbleStyle.left ? "receive" : "send"
          }
        >
          <div>{props.sender}</div>
          <div>{props.timeSent}</div>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
export { BubbleStyle };
export type { BubbleProps };
