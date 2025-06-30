import React from 'react';

const TabMenu = ({ fill, tabs, activeTab, onTabChange }) => (
    <ul className={`nav nav-tabs ${fill ? 'nav-justified' : ''}`}>
        {tabs.map(tab => (
            <li
                key={tab.value}
                className="nav-item"
                onClick={() => onTabChange(tab.value)}
                style={{ cursor: 'pointer' }}
            >
                <div className={`nav-link ${activeTab === tab.value ? 'active' : ''}`}>
                    {tab.label}
                </div>
            </li>
        ))}
    </ul>
);

export default TabMenu;
