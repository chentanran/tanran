import React, { Fragment } from "react";
import classNames from "classnames";
import "./index.scss";
import { ConfigContext } from "./ConfigProvider";

export type SizeType = "small" | "middle" | "large" | number | undefined;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  split?: React.ReactNode;
  wrap?: boolean;
  align?: "start" | "center" | "end" | "baseline";
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: React.FC<SpaceProps> = (props) => {
  const { space } = React.useContext(ConfigContext);

  const {
    className,
    style,
    children,
    size = space?.size || "small",
    direction = "horizontal",
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const childNodes = React.Children.toArray(props.children);

  const mergedAlign = direction === "horizontal" && align === undefined ? 'center' : align;
  const cn = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign
    },
    className
  )

  console.log(childNodes, 'childNodes')
  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`;

    return (
      <Fragment key={key}>
      <div className="space-item">
        {child}
      </div>
      {
        i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>{split}</span>
        )
      }
      </Fragment>
    );
  });

  const otherStyles: React.CSSProperties = {}

  const [horizontalSize, verticalSize] = React.useMemo(() => (
    (Array.isArray(size) ? size : [size, size] as [SizeType, SizeType]).map(item => {
      return getNumberSize(item)
    })
  ), [size])

  otherStyles.columnGap = horizontalSize
  otherStyles.rowGap = verticalSize

  if (wrap) {
    otherStyles.flexWrap = 'wrap'
  }

  return (
    <div className={cn} style={{
      ...style,
      ...otherStyles
    }} {...otherProps}>
      {nodes}
    </div>
  );
};

export default Space;
