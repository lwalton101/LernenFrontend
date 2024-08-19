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
        <div className="tab-headers">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const isActive = index === activeTab;
                    return (
                        <button
                            className={isActive ? 'tab-header active' : 'tab-header'}
                            onClick={() => setActiveTab(index)}
                        >
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
        <div className="tabs">
            <TabHeaders activeTab={activeTab} setActiveTab={setActiveTab}>
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
