import React, { KeyboardEvent, Dispatch, ChangeEvent } from 'react';
import Rif from '../conditional-renderer/rif'; 

export default (props: any): JSX.Element => {

    return(
        <div className="form-input">
            <input
                type={props.type}
                onChange={(e: ChangeEvent) => props.changeFn((e.target as HTMLInputElement).value)}
                placeholder={props.placeholder}
                value={props.value}
            />
            <Rif condition={props.clear}>
                <i>clear</i>
            </Rif>
        </div>
    )
}