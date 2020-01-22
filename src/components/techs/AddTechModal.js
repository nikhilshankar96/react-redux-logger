import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({ html: "Please enter first and last name of technician" });
		} else {
			console.log(firstName, lastName);
			//clear fields
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div className='modal' id='add-tech-modal'>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
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

export default AddTechModal;
