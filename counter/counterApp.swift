import SwiftUI

@main
struct counterApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("\(count)")
                .font(.system(size: 80, weight: .bold))
            Button(action: { count += 1 }) {
                Circle()
                    .fill(.red)
                    .frame(width: 200, height: 200)
            }
        }
    }
}
