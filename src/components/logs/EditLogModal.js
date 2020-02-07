import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../techs/TechSelectOptions";
import { updateLog } from "../../actions/logAction";
import PropTypes from "prop-types";

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Please enter a message and tech" });
		} else {
			// console.log(message, tech, attention);
			const updLog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date()
			};

			updateLog(updLog);
			M.toast({ html: `Log updated by ${tech}` });

			//clear fields
			setMessage("");
			setTech("");
			setAttention(false);
		}
	};

	return (
		<div className='modal' id='edit-log-modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value='tech'
							className='browser-default'
							onChange={e => setTech(e.target.value)}
						>
							<option value='' className='' disabled>
								{" "}
								Select technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}
								/>
								<span className=''>Needs attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#'
					className='modal-close waves-effect waves-blue blue btn'
					onClick={onSubmit}
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

EditLogModal.propTypes = {
	current: PropTypes.object,
	updatelog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
