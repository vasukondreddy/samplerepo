def count_frequencies(arr):
    freq = {}
    for num in arr:
        if num in freq:
            freq[num] += 1
        else:
            freq[num] = 1
    return freq

# Example usage
if __name__ == "__main__":
    input_list = [2, 3, 2, 5, 3, 3, 5, 6]
    result = count_frequencies(input_list)
    print("Input List:", input_list)
    print("Frequencies:", result)
