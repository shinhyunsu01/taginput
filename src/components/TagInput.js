import { useState } from "react";

function TagsInput() {
	const [tags, setTags] = useState([]);
	function handleKeyDown(e) {
		if (e.key !== "Enter") return;
		const value = e.target.value;
		console.log(value, value.trim());
		//if (!value.trim()) return;
		setTags([...tags, value]);
		e.target.value = "";
	}
	function removeTag(index) {
		setTags(tags.filter((el, i) => i !== index));
	}
	return (
		<div className="tags-input-container">
			{tags.map((tag, index) => (
				<div key={index} className="tag-item">
					<span className="text">{tag}</span>
					<span className="close" onClick={() => removeTag(index)}>
						&times;
					</span>
				</div>
			))}
			<input
				onKeyDown={handleKeyDown}
				type="text"
				className="tag-input"
				placeholder="Type something"
			/>
		</div>
	);
}

export default TagsInput;
