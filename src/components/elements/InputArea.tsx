import React, { ChangeEvent } from 'react';

export default (props: any) => {

    return(
        <div className="form-input">
            <textarea
                onChange={(e: ChangeEvent): void => props.changeFn((e.target as HTMLTextAreaElement).value)}
                placeholder={props.placeholder}
                value={props.value}
            />
            <i>clear</i>
        </div>
    )
}
