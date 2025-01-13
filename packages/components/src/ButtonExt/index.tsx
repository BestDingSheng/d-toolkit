import React, { useState } from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

export interface ButtonExtProps extends Omit<ButtonProps, 'loading'> {
  /** 点击后是否自动进入加载状态 */
  autoLoading?: boolean;
  /** 加载状态持续时间(ms)，仅在 autoLoading 为 true 时有效 */
  loadingDuration?: number;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>;
}

const ButtonExt: React.FC<ButtonExtProps> = ({
  autoLoading = false,
  loadingDuration = 1000,
  onClick,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!onClick) return;

    if (autoLoading) {
      setLoading(true);
      try {
        await onClick(e);
        setTimeout(() => setLoading(false), loadingDuration);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    } else {
      onClick(e);
    }
  };

  return (
    <Button {...props} loading={loading} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ButtonExt; 