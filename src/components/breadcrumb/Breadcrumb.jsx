export const Breadcrumb = ({menus = []}) => {
  return (
    <div className="breadcrumb pt-16">
        {
            menus.map((menu, index) => {
                return <a key={index} href="#" className="">{menu}<span className="mx-3">{index < menus.length - 1 && ">"}</span> </a>;
            })
        }
    </div>
  )
}
