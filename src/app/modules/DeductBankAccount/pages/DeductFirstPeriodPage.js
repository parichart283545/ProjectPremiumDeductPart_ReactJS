import React from 'react';
import DialogFirstPeriod from '../components/DialogFirstPeriod';
import FirstPeriodGroupTable from '../components/FirstPeriodGroupTable';

function DeductFirstPeriodPage() {

    return (
        //{ JSON.stringnify('UI - 2 - 1 ยืนยันตั้งหนี้หักบัญชีธนาคาร(หักงวดแรก)') }
        <div>
            <FirstPeriodGroupTable />
            <DialogFirstPeriod />
        </div>
    )
}

export default DeductFirstPeriodPage
