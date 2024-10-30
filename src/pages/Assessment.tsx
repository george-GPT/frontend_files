import React, { FC } from 'react';

interface AssessmentPageProps {
    title?: string;
}

const AssessmentPage: FC<AssessmentPageProps> = ({ title }) => {
    return (
        <div>
            <h1>{title || "Default Title"}</h1>
            {/* Content for your assessment page */}
        </div>
    );
};

export default AssessmentPage;
