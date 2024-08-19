import React, { ReactNode } from 'react';

type TabProps = {
    title: string;
    children: ReactNode;
};

const Tab = ({ title, children }: TabProps) => {
    return <div className="tab">{children}</div>;
};

export default Tab;
