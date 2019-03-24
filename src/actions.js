import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
EDIT_COMMENT = 'EDIT_COMMENT',
REMOVE_COMMENT = 'DELETE_COMMENT',
THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
	

export default function addComment(text){
	return {
	type: ADD_COMMENT,
	text: text,
	id: uuid.v4() 
	}
}

export function editComment(text, id){
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

export function removeComment(id){
	return {
		type: REMOVE_COMMENT,
		id
	}
}

export function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
  }
}

export function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
  }
}