const TabsHeader = ({ tabs, activeTab, callback }) => {
  const tab = (tab, index) => {
  
    const activeStyle = `tab ${index === activeTab ? 'tab-active' : ''}`;
    return (
    <a
      role="tab"
      className={activeStyle}
      key={index}
      onClick={() => callback(index)}
    >
      {tab}
    </a>
  )};

  return (
    <div role="tablist" className="tabs tabs-boxed mb-8">
      {
        tabs.map(tab)
      }
    </div>
  );
}

export default TabsHeader;
