import React from "react";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">BT(버튼)</h1>
			<h2 className="deco-h2">BIG</h2>
			<div className="hz-root hz-gap10">
				<Button color="pri" size="big">pri</Button>
				<Button color="pri-o" size="big">pri-o</Button>
				<Button color="pri-o2" size="big">pri-o2</Button>
				<Button color="gray" size="big">gray</Button>
				<Button color="gray-o" size="big">gray-o</Button>
			</div>

			<br /><br />
			<h2 className="deco-h2">Medium</h2>
			<div className="hz-root hz-gap8">
				<Button color="pri" size="md">pri</Button>
				<Button color="pri-o" size="md">pri-o</Button>
				<Button color="pri-o2" size="md">pri-o2</Button>
				<Button color="gray" size="md">gray</Button>
				<Button color="gray-o" size="md">gray-o</Button>
			</div>

			<br /><br />
			<h2 className="deco-h2">Small</h2>
			<div className="hz-root hz-gap5">
				<Button color="pri" size="sm">pri</Button>	
				<Button color="pri-o" size="sm">pri-o</Button>	
				<Button color="pri-o2" size="sm">pri-o2</Button>	
				<Button color="gray" size="sm">gray</Button>	
				<Button color="gray-o" size="sm">gray-o</Button>
			</div>

			<br /><br />
			<h2 className="deco-h2">Tiny</h2>
			<div className="hz-root hz-gap5">
				<Button color="pri" size="tn">pri</Button>	
				<Button color="pri-o" size="tn">pri-o</Button>	
				<Button color="pri-o2" size="tn">pri-o2</Button>	
				<Button color="gray" size="tn">gray</Button>	
				<Button color="gray-o" size="tn">gray-o</Button>
			</div>	
			
		</div>
	);
}
export default ContentsContainer;