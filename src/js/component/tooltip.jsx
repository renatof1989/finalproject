import React, { Component } from "react";
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import Negociecoins from  "./negociecoins.jsx"

const wrapperStyles = {
	width: "100%",
	maxWidth: 980,
	margin: "0 auto"
};

class BasicMap extends Component {
	componentDidMount() {
		setTimeout(() => {
			ReactTooltip.rebuild();
		}, 100);
	}
	render() {
		return (
			<div style={wrapperStyles}>
				<ComposableMap
					projectionConfig={{
						scale: 205
					}}
					width={980}
					height={551}
					style={{
						width: "100%",
						height: "auto",
						marginTop: "50px"
					}}>
					<ZoomableGroup center={[0, 20]} disablePanning>
						<Geographies geography="/world-50m.json">
							{(geographies, projection) =>
								geographies.map(
									(geography, i) =>
										geography.id !== "ATA" && (
											<Geography
												key={i}
												data-tip={
													geography.properties.name + "    " +
													{Negociecoins} 
													
												}
												geography={geography}
												projection={projection}
												style={{
													default: {
														fill: "#ECEFF1",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none"
													},
													hover: {
														fill: "#607D8B",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none"
													},
													pressed: {
														fill: "#FF5722",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none"
													}
												}}
											/>
										)
								)
							}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
				<ReactTooltip />
			</div>
		);
	}
}

export default BasicMap;
