import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../../Layouts/DashboardLayout';
import { SearchBar } from '../../UI/SearchBar';
import { CityContainerWidgets } from '../../UI/CityContainerWidgets';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [userInput, setUserInput] = useState<string>();
    const history = useHistory();

    useEffect(() => {
        if (userInput) history.push(`/city/${userInput}`);
    }, [userInput]);

    return (
        <DashboardLayout>
            <SearchBar placeholder="City name" onSearch={(e) => setUserInput(e)} />
            <CityContainerWidgets />
        </DashboardLayout>
    );
}

export default Dashboard;