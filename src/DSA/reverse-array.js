(function ()
{
    function reverseArray(arr)
    {
        for (let i = 0; i < arr.length / 2; i++)
        {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }

        return arr;
    }

    console.log(reverseArray([10, 11, 12, 13, 14]))
})();