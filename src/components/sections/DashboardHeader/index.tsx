import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../../store/actions/auth';
import { Button } from '../../UI/Button';
import Select from '../../UI/Select';
import { Unit } from '../../../types/Unit';
import { SET_CONFIG } from '../../../types/ConfigInput';
import { RootState } from '../../../store';

const options = [
    { value: Unit.METRIC.toString(), text: 'Metric' },
    { value: Unit.IMPERIAL.toString(), text: 'Imperial' },
    { value: Unit.KELVIN.toString(), text: 'Kelvin' },
]

const DashboardHeader: React.FC = () => {
    const { units } = useSelector((state: RootState) => state.config);
    const history = useHistory();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        console.log("logout");
        dispatch(signout());
    }

    const selectionHandler = (option: string) => {
        console.log("selectionHandler: " + option);
        dispatch({
            type: SET_CONFIG,
            payload: option
        });
    }

    return (
        <div className="absolute w-screen bg-black z-10">
            <nav>
                <Select
                    options={options}
                    name="options"
                    onSelection={selectionHandler}
                    selection={units}
                />
                <Button
                    label="Sign out"
                    onClick={logoutHandler}
                    className="cursor-pointer"
                />
            </nav>
        </div>
    );
}

export { DashboardHeader };