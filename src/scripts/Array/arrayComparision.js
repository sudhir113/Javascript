const a = [
    {id: 125, randomvalue: 'hello'}
    ];
    
    const b = [
    {id: 123, randomvalue: 'hello', othervalue: 'sup'},
    {id: 125, randomvalue: 'sup', othervalue: 'hello'}
    ];

    let common = a.filter(ele => (b.findIndex( ele2 => ele2.id == ele.id)) > -1);

    console.log('common',common);