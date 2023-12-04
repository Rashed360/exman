export const calculateTotal = (data = []) => {
	let total = { add: 0, rem: 0 }
	data.forEach(item => {
		if (item.type === 'INC') {
			total.add += item.amount
		} else if (item.type === 'EXP') {
			total.rem += item.amount
		} else return
	})
	return total
}
