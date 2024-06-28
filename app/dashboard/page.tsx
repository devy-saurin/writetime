'use client'

import React, { useState } from 'react'
import SearchSection from './_components/searchSection'
import TemplateListSection from './_components/templateListSection'

const Dashboard = () => {
    const [userSearchInput, setUserSearchInput] = useState<string>()
    return (
        <div>
            {/* Search Section */}
            <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
            {/* Template Section */}
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default Dashboard