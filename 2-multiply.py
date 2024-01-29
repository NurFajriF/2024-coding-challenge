def multiply(n: int)->int:
    d = len(str(abs(n)));
    result = n * 5**d
    return result;

print(multiply(-50))
