

---

## **🛠 Solution Overview**
This system is a **RAG-based chatbot** that retrieves responses from a **knowledge base of PDFs**. It works as follows:
1. **Ingestion Phase**: PDFs are processed, text is extracted, and embeddings are generated.
2. **Retrieval Phase**: User queries are embedded and matched against the stored knowledge base.
3. **Response Generation**: The retrieved context is passed to the LLM (Llama3.2-3b) for an intelligent response.

---

## **📜 Technical Architecture**
### **Components & Information Flow**
1. **User Interface (Frontend)**
   - **Vite + TypeScript**: A modern, high-performance frontend framework for an interactive chat interface.
   - User sends a query via the UI.

2. **Query Processing & Embedding**
   - **Ollama nomic-embed-text**: Converts user queries into vector embeddings.
   - **Cross Encoder**: Improves ranking by scoring query-document similarity.

3. **Vector Database (Knowledge Store)**
   - **ChromaDB**: Stores embeddings of the PDF contents and efficiently retrieves relevant documents.

4. **LLM Interface & Response Generation**
   - **Ollama (Llama3.2-3b)**: Processes the retrieved document chunks and generates the final response.
   - **Go-Llama**: Acts as the API layer between the LLM and ChromaDB.

5. **Backend API**
   - **Ollama SDK (Python)**: Interfaces with the LLM for response generation.
   - The retrieved chunks are passed to the LLM, and the final response is generated.

---

## **⚡ Tech Stack**
| Component             | Technology Used | Purpose |
|----------------------|---------------|---------|
| **Frontend (Chat Interface)** | Vite + TypeScript | Fast, interactive web UI for user interaction |
| **LLM** | Ollama (Llama3.2-3b) | Generates responses using retrieved context |
| **Vector Database** | ChromaDB | Stores and retrieves PDF embeddings |
| **Embedding Model** | Ollama nomic-embed-text | Converts text into vector embeddings |
| **Ranking Model** | Cross Encoder (Hugging Face) | Improves retrieval accuracy by re-ranking results |
| **Backend API** | Go-Llama + Ollama SDK | Connects LLM, ChromaDB, and Vite frontend |
| **PDF Processing** | PyMuPDF / PDFPlumber | Extracts text from PDFs |

---

## **📡 Information Flow**
### **1️⃣ Data Ingestion (PDF Processing & Storage)**
- Upload PDFs → Extract text using **PyMuPDF / PDFPlumber**.
- Convert extracted text into **embeddings** using **nomic-embed-text**.
- Store the embeddings in **ChromaDB**, linked to the original document.

### **2️⃣ Query Handling (Retrieval & Ranking)**
- User enters a query in the **Vite + TypeScript** UI.
- Query is converted to embeddings using **nomic-embed-text**.
- Top matching documents are retrieved from **ChromaDB**.
- **Cross Encoder** ranks the best matching document chunks.

### **3️⃣ Response Generation (LLM Processing)**
- The retrieved text chunks are sent to **Ollama (Llama3.2-3b)** via **Go-Llama**.
- The LLM generates a response using the retrieved context.
- The final response is displayed in the **Vite + TypeScript UI**.

---

## **💡 Example Workflow**
1. **User Input:**  
   _"Tell me something about the CBDC?"_
   
2. **Processing Steps:**
   - The query is **embedded** using **nomic-embed-text**.
   - The **vector search** retrieves relevant PDF sections from **ChromaDB**.
   - **Cross Encoder** ranks the most relevant sections.
   - The **top-ranked text chunks** are sent to **Ollama (Llama3.2-3b)**.
   - The LLM generates a **context-aware response**.

3. **Final Output:**  
   _"CBDC is central bank digital currency which is also known as e-Ruppee, it's under pilot program run by RBI and is expected to launch in 2025."_

---

## **🔗 How Each Component Works Together**
- **Vite + TypeScript** → UI for chat  
- **Ollama nomic-embed-text** → Converts queries & documents into embeddings  
- **ChromaDB** → Stores document embeddings & retrieves relevant sections  
- **Cross Encoder** → Improves search ranking  
- **Go-Llama** → Bridges ChromaDB and Llama3.2-3b  
- **Ollama SDK** → Calls the LLM for response generation  
- **Ollama (Llama3.2-3b)** → Generates human-like responses  

---

## **🚀 Why This Solution?**
✅ **Fast & Efficient** → Uses optimized embeddings for retrieval  
✅ **Scalable** → Works with large PDFs using **ChromaDB**  
✅ **Context-Aware** → LLM generates responses based on retrieved knowledge  
✅ **Modern & Lightweight UI** → Uses **Vite + TypeScript** for a seamless experience  

---

🚀🚀
