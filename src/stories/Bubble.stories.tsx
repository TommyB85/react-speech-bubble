import React from "react";
import { Story, Meta } from "@storybook/react";
import Bubble, { BubbleProps, BubbleStyle } from "../index";

export default {
  component: Bubble,
  title: "UI Element/Speech Bubble",
} as Meta;

const Template: Story<BubbleProps> = (args) => <Bubble {...args} />;

export const Receive = Template.bind({});
Receive.args = {
  message:
    "Nostrud Lorem voluptate mollit nostrud ullamco ea laboris in reprehenderit labore nulla. Qui reprehenderit anim est enim cillum sit. Esse excepteur quis occaecat officia cillum eu deserunt laboris amet duis pariatur laboris ad. Aute sint id deserunt occaecat labore nulla minim. Mollit officia aliqua nulla irure ullamco culpa irure mollit occaecat fugiat laboris.",
  sender: "Tom",
  timeSent: "1/1/2022 1:10:01 PM",
  bubbleStyle: BubbleStyle.left,
};

export const Send = Template.bind({});
Send.args = {
  ...Receive.args,
  bubbleStyle: BubbleStyle.right,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Receive.args,
  textColor: "skyblue",
  bgColor: "crimson",
};
