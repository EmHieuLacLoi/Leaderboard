// Level 1
console.log('-------------Level 1------------------')
let challenge = ' Học JavaScript trong 30 ngày '
console.log(challenge.trim())
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 14))
console.log(challenge.includes('Script'))
let arr = challenge.split(' ')
console.log(arr)
let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let b = a.split(',')
console.log(b)
let c = challenge.replace('JavaScript', 'Python')
console.log(c)
console.log(challenge.charAt(15), challenge.charCodeAt(5))
console.log(challenge.indexOf('o'), challenge.lastIndexOf('o'))
let d = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(d.indexOf('vì'), d.lastIndexOf('vì'), d.search('vì'))
console.log(challenge.trim().startsWith('H'), challenge.endsWith(' '), challenge.match(/o/g))
let e = 'Học JavaScript trong', f = '30 ngày'
console.log(e.concat(f))
console.log(challenge.repeat(2))

// Level 2
console.log('-------------Level 2------------------')
let g = "The quote 'There is no exercise better for \
the heart than reaching down and lifting people up.' \
by John Holmes teaches us to help one another."
let h = `"Love is not patronizing and charity isn't \
about pity, it is about love. Charity and love are the same -- \
with charity you give love, so don't just give money but reach out your hand instead."`
console.log(g)
console.log(h)
console.log(typeof parseInt('10') === typeof 10, Math.ceil(parseFloat('9.8')) === 10)
let i = 'python', k = 'jargon'
console.log(i.includes('on'), k.includes('on'))
let j = 'Tôi hy vọng khóa học này không chứa đầy những biệt ngữ.'
console.log(j.search('biệt ngữ'))
console.log(Math.floor(Math.random() * 100))
console.log(Math.floor(Math.random() * 11 + 50))
console.log(Math.floor(Math.random() * 255))
let l = 'JavaScript'
console.log(l[1])
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
let z = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(z.substring(z.indexOf('bởi'), z.lastIndexOf('bởi')))

// Level 3
console.log('-------------Level 3------------------')
let x = 'Tình yêu là điều tuyệt vời nhất trên thế giới này. \
Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.'
console.log(x.match(new RegExp('Tình yêu', "gi")))
console.log(d.match(new RegExp('vì', 'gi')))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding\
 as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es \
 thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^\w\s]/g, ''))

let vb = 'Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 \
euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.'
let newVb = vb.match(/\d+/g)
console.log(Number(newVb[0]) + Number(newVb[1]) + Number(newVb[2]))