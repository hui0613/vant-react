import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';

const Row = ({ children, gutter, offset, justify, align, click }: IProps) => {
  const rowProps = {
    className: classnames(`${baseClass}__row`, []),
    style: {}
  };

  return (
    <div
      {...rowProps}
      style={{
        gridGap: gutter
      }}
    >
      {children}
    </div>
  );
};

export default Row;