import { PropsWithChildren } from "react";

const Page = (props: PropsWithChildren<{}>) => {
  const { children } = props
  return (
    <div className="page-content">
      <div className="content-wrapper">
        {children}
      </div> 
    </div> 
  )
}
export default Page;
