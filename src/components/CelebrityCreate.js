import React from "react";

class CelebrityCreate extends React.Component {
	handleSubmit(){ 

		fetch('https://crud9x.herokuapp.com/api/celebrities', {
			method: 'POST',
			body: JSON.stringify({
				image_url : this.refs.image_url.value,
				name : this.refs.name.value,
				description : this.refs.description.value
			}),
			headers: {'Content-Type':'application/json'}
		}).then();
	}

	render(){
		return(
			<div>
				<form>
					Địa chỉ hình ảnh: <input type="text" placeholder="image_url" ref='image_url'/>
					Họ Tên: <input type="text" placeholder="name" ref='name'/>
					Miêu Tả: <input type="text" placeholder="description" ref='description'/>
					<button type="button" className="btn btn-success my-2" onClick={()=>this.handleSubmit()}> Thêm </button>
				</form>
			</div>
			);
	}
}

export default CelebrityCreate;