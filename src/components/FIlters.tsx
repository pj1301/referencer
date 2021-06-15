import React, { FunctionComponent } from 'react';

const Filters: FunctionComponent = () => {
	return(
		<div id="filter-panel">
			<div className="option">Date</div>
			<span className="separator"></span>
			<div className="option">Project</div>
			<span className="separator"></span>
			<div className="option">Tags</div>
			<span className="separator"></span>
			<div className="option">Guide</div>
			<span className="separator"></span>
			<div className="option">Create Reference</div>
		</div>
	)
}

export default Filters;
