import React from 'react';

export default (props: any) => {
    return props.condition ? props.children : null;
}
