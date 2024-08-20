import React, { useState, ReactNode, ReactElement } from 'react';

type TabsProps = {
    children: ReactNode;
    initialActiveTab?: number;
};

type TabHeadersProps = {
    activeTab: number;
    setActiveTab: (index: number) => void;
    children: ReactNode;
};

const TabHeaders = ({ activeTab, setActiveTab, children }: TabHeadersProps) => {
    return (
        <div className="flex w-full">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const isActive = index === activeTab;
                    const className = isActive ? "flex-1 font-bold" : "flex-1"
                    return (
                        <button className={"flex-1"} onClick={() => setActiveTab(index)}>
                            {child.props.title}
                        </button>
                    );
                }
                return null;
            })}
        </div>
    );
};

const Tabs = ({ children, initialActiveTab = 0 }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    return (
        <div className="flex-col">
            <TabHeaders activeTab={activeTab as number} setActiveTab={setActiveTab}>
                {children}
            </TabHeaders>
            <div className="tab-content">
                {React.Children.map(children, (child, index) =>
                    index === activeTab ? child : null
                )}
            </div>
        </div>
    );
};

export default Tabs;
