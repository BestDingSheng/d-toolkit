import styled from "styled-components";

export const PreviewContainer = styled.div`
  width: 100%;
  height: calc(100% - 164px);
  display: flex;
  flex-direction: column;
  background: #ededed;
`;

export const MainImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export const ThumbnailsContainer = styled.div`
  height: 64px;
  padding: 10px 0;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-left: 16px;
  /*  */
  // 添加以下样式
  white-space: nowrap; // 防止内容换行
  flex-wrap: nowrap; // 防止flex项目换行
  /* &::-webkit-scrollbar {
    height: 6px; // 设置滚动条高度
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc; // 滚动条颜色
    border-radius: 3px; // 滚动条圆角
  } */
`;

export const Thumbnail = styled.div.attrs({ role: 'button' })<{ active: boolean }>`
  min-width: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  flex-shrink: 0;
  border: 2px solid ${props => props.active ? '#1890ff' : '#eee'};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ToolbarContainer = styled.div`
  height: 40px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px 0;
`;
