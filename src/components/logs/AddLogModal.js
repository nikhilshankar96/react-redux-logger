import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = addLog => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	const onSubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Please enter a message and tech" });
		} else {
			const newLog = {
				message,
				attention,
				tech,
				date: new Date()
			};
			console.log(message, tech, attention);

			addLog(newLog);

			M.toast({ html: `Log added by ${tech}` });

			//clear fields
			setMessage("");
			setTech("");
			setAttention(false);
		}
	};

	return (
		<div className='modal' id='add-log-modal' style={modalStyle}>
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
						<label htmlFor='message' className='active'>
							Log message
						</label>
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
							<option value='' className='' disabled default>
								{" "}
								Select technician
							</option>
							<option value='John Doe' className=''>
								John Doe
							</option>
							<option value='John Doe' className=''>
								John Doe
							</option>
							<option value='John Doe' className=''>
								John Doe
							</option>
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

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

export default connect(null, { addLog })(AddLogModal);
