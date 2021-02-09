import { PropsWithChildren } from "react";

interface Props {
  title: string
}

const Header = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;
  return (
    <div className="page-header page-header-light">
      <div className="page-header-content container header-elements-inline">
        <div className="page-title d-flex">
          <h2 className="font-weight-semibold ml-2">{title}</h2>
        </div>
        <div className="header-elements">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Header;
