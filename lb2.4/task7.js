let matrix=pushArr(5,5);

setTimeout(() => replaceGolDiag(matrix, 5, 5), 3000);

function pushArr(rows,cols)
{
    let arr = []
    for (let i=0; i < rows; i++)
    {            
        arr[i]=[]     
        for (let j=0; j < cols; j++)
        {
            arr[i][j] = Math.floor(Math.random() * 201) - 100;
        }
    }

    console.log("Початковий масив:")
    console.log(arr);
    return arr;
}

function replaceGolDiag(arr, rows, cols)
{
    for (let i=0; i < rows; i++)
    {                 
        for (let j=0; j < cols; j++)
        {
            if(i==j)
            {
                if(arr[i][j]<0)
                {
                    arr[i][j]=0;
                }
                else
                {
                    arr[i][j]=1;
                }
            }
        }
    }

    console.log("Зі зміненою головною діагоналлю масив: ");
    console.log(matrix);
}