import React from 'react';
import { DashboardHeader } from '../../sections/DashboardHeader';
import { Container } from './styles'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <Container>
            <DashboardHeader />
            <div className="flex w-full h-full relative">
                <div className="m-auto">
                    {children}
                </div>
            </div>
        </Container>
    );
}

export { DashboardLayout };