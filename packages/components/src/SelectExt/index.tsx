import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

export interface SelectExtProps extends Omit<SelectProps, 'showSearch'> {
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否默认聚焦 */
  autoFocus?: boolean;
}

const SelectExt: React.FC<SelectExtProps> = ({ allowClear = true, autoFocus = false, ...props }) => {
  return (
    <Select
      showSearch
      allowClear={allowClear}
      autoFocus={autoFocus}
      filterOption={(input, option) =>
        (option?.label?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
      }
      {...props}
    />
  );
};

export default SelectExt; 